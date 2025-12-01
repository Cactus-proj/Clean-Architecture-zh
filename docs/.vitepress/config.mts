import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《架构整洁之道》中文版",
  // meta 标签 <= 80 中文字符
  description: "架构整洁之道 罗伯特·C·马丁"
  + "; Clean Code: A Handbook of Agile Software Craftsmanship 中文翻译"
  + "; 代碼整潔之道 馬丁 (Robert C. Martin)"
  ,
  lang: 'zh-CN',
  base: '/Clean-Architecture-zh/',

  lastUpdated: true,
  // https://vitepress.dev/zh/guide/sitemap-generation#options
  sitemap: {
    hostname: 'https://cactus-proj.github.io/Clean-Architecture-zh/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '章节正文', link: '/ch1' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          {
            text: '第一部分 概述',
            link: '/part1',
            items: [
              { text: '第 1 章 设计与架构究竟是什么', link: '/ch1' },
              { text: '第 2 章 两个价值维度', link: '/ch2' },
            ]
          },
          {
            text: '第二部分 从基础构件开始：编程范式',
            link: '/part2',
            items: [
              { text: '第 3 章 编程范式总览', link: '/ch3' },
              { text: '第 4 章 结构化编程', link: '/ch4' },
              { text: '第 5 章 面向对象编程', link: '/ch5' },
              { text: '第 6 章 函数式编程', link: '/ch6' },
            ]
          },
          {
            text: '第三部分 设计原则',
            link: '/part3',
            items: [
              { text: '第 7 章 SRP：单一职责原则', link: '/ch7' },
              { text: '第 8 章 OCP：开闭原则', link: '/ch8' },
              { text: '第 9 章 LSP：里氏替换原则', link: '/ch9' },
              { text: '第 10 章 ISP：接口隔离原则', link: '/ch10' },
              { text: '第 11 章 DIP：依赖反转原则', link: '/ch11' },
            ]
          },
          {
            text: '第四部分 组件构建原则',
            link: '/part4',
            items: [
              { text: '第 12 章 组件', link: '/ch12' },
              { text: '第 13 章 组件聚合', link: '/ch13' },
              { text: '第 14 章 组件耦合', link: '/ch14' },
            ]
          },
          {
            text: '第五部分 软件架构',
            link: '/part5',
            items: [
              { text: '第 15 章 什么是软件架构', link: '/ch15' },
              { text: '第 16 章 独立性', link: '/ch16' },
              { text: '第 17 章 划分边界', link: '/ch17' },
              { text: '第 18 章 边界剖析', link: '/ch18' },
              { text: '第 19 章 策略与层次', link: '/ch19' },
              { text: '第 20 章 业务逻辑', link: '/ch20' },
              { text: '第 21 章 尖叫的软件架构', link: '/ch21' },
              { text: '第 22 章 整洁架构', link: '/ch22' },
              { text: '第 23 章 展示器和谦卑对象', link: '/ch23' },
              { text: '第 24 章 不完全边界', link: '/ch24' },
              { text: '第 25 章 层次与边界', link: '/ch25' },
              { text: '第 26 章 Main 组件', link: '/ch26' },
              { text: '第 27 章 服务：宏观和微观', link: '/ch27' },
              { text: '第 28 章 测试边界', link: '/ch28' },
              { text: '第 29 章 整洁的嵌入式架构', link: '/ch29' },
            ]
          },
          {
            text: '第六部分 实现细节',
            link: '/part6',
            items: [
              { text: '第 30 章 数据库只是实现细节', link: '/ch30' },
              { text: '第 31 章 Web 是实现细节', link: '/ch31' },
              { text: '第 32 章 应用程序框架是实现细节', link: '/ch32' },
              { text: '第 33 章 案例分析：视频销售网站', link: '/ch33' },
              { text: '第 34 章 拾遗', link: '/ch34' },
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cactus-proj/Clean-Architecture-zh' }
    ],

    editLink: {
      pattern: 'https://github.com/Cactus-proj/Clean-Architecture-zh/edit/main/docs/:path'
    },
  }
})
