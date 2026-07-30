import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('docs/.vitepress/dist')
const configuredBase = process.env.BASE_URL ?? '/Clean-Architecture-zh/'
const base = `/${configuredBase.replace(/^\/|\/$/g, '')}/`

const htmlFiles = []

function collectHtmlFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      collectHtmlFiles(file)
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(file)
    }
  }
}

collectHtmlFiles(distDir)

const failures = []

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8')
  const page = path.relative(distDir, htmlFile)
  const sources = [...html.matchAll(/<img\b[^>]*\bsrc=(["'])(.*?)\1/g)]
    .map((match) => match[2])
  const chapterMatch = /^ch(\d+)\.html$/.exec(page)

  if (chapterMatch) {
    const expectedCover = `CH-UN${chapterMatch[1].padStart(2, '0')}`
    const actualCover = sources.find((source) => source.includes('/CH-UN'))

    if (!actualCover?.includes(`/${expectedCover}.`)) {
      failures.push({
        page,
        source: actualCover ?? '未找到章节封面',
        reason: `章节封面应为 ${expectedCover}.jpg`
      })
    }
  }

  for (const source of sources) {
    if (/^(?:https?:|data:|blob:)/.test(source)) {
      continue
    }

    const sourceWithoutQuery = source.split(/[?#]/, 1)[0]
    let outputPath

    if (sourceWithoutQuery.startsWith('/')) {
      if (!sourceWithoutQuery.startsWith(base)) {
        failures.push({
          page,
          source,
          reason: `URL 没有使用构建 base ${base}`
        })
        continue
      }

      outputPath = sourceWithoutQuery.slice(base.length)
    } else {
      const pageDirectory = path.dirname(path.relative(distDir, htmlFile))
      outputPath = path.join(pageDirectory, sourceWithoutQuery)
    }

    const expectedFile = path.join(distDir, outputPath)

    if (!fs.existsSync(expectedFile)) {
      failures.push({
        page,
        source,
        reason: `构建产物不存在：${path.relative(process.cwd(), expectedFile)}`
      })
    }
  }
}

if (failures.length > 0) {
  console.error('构建页面包含无法访问的本地图片：')

  for (const failure of failures) {
    console.error(`- ${failure.page}: ${failure.source}`)
    console.error(`  ${failure.reason}`)
  }

  process.exit(1)
}

console.log(`检查通过：${htmlFiles.length} 个页面的本地图片均存在`)
