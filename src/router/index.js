import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import SponsorPage from '@/pages/SponsorPage'
import CallForPaperPage from '@/pages/CallForPaperPage'
import AgendaPage from '@/pages/AgendaPage'
import SpeakerPage from '@/pages/SpeakerPage'
import StaffPage from '@/pages/StaffPage'

Vue.use(Router)

const router = new Router({
  // 網址不顯示 #，靠 HTML5 History API 讓 SPA 模擬正常路徑（例：domain.com/foo/bar）
  mode: 'history',
  base: '/2018/',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/sponsors',
      name: 'SponsorPage',
      component: SponsorPage,
    },
    {
      path: '/cfp',
      name: 'CallForPaperPage',
      component: CallForPaperPage,
    },
    {
      path: '/agenda',
      name: 'AgendaPage',
      component: AgendaPage,
    },
    {
      path: '/speakers',
      name: 'SpeakerPage',
      component: SpeakerPage,
    },
    {
      path: '/staff',
      name: 'StaffPage',
      component: StaffPage,
    },
  ],
})

router.afterEach(() => {
  // Scroll to top
  window.scroll(0, 0)
})

export default router
