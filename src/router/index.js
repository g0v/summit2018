import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import SponsorPage from '@/pages/SponsorPage'

Vue.use(Router)

export default new Router({
  // 網址不顯示 #，靠 HTML5 History API 讓 SPA 模擬正常路徑（例：domain.com/foo/bar）
  mode: 'history',
  base: '/2018/',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/sponsors',
      name: 'SponsorPage',
      component: SponsorPage
    }
  ]
})
