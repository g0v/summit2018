// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './foundation'
import FaIcon from './vue-awesome'
import App from './App'
import { TW, EN, UnderlineLink, ScrollToTack } from '@/components'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

// Global components
Vue.component('TW', TW)
Vue.component('EN', EN)
Vue.component('FaIcon', FaIcon)
Vue.component('UnderlineLink', UnderlineLink)
Vue.component('ScrollToTack', ScrollToTack)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
