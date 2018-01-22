import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'en': require('./en.json'),
    'zh': require('./zh.json')
  }
})

if (module.hot) {
  module.hot.accept(['./en.json', './zh.json'], () => {
    i18n.setLocaleMessage('en', require('./en.json'))
    i18n.setLocaleMessage('zh', require('./zh.json'))
    console.log('hot reload', this, arguments)
  })
}

export default i18n
