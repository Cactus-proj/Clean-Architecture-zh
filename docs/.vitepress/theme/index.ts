import DefaultTheme from 'vitepress/theme'
import Figures from './components/Figures.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Figures', Figures)
  }
}
