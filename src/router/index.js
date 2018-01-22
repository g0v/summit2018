import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'

Vue.use(Router)

export default new Router({
  // 網址不顯示 #，靠 HTML5 History API 讓 SPA 模擬正常路徑（例：domain.com/foo/bar）
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
})
