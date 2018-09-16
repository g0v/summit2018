import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import SponsorPage from '@/pages/SponsorPage'
import CallForPaperPage from '@/pages/CallForPaperPage'
import AgendaPage from '@/pages/AgendaPage'
import SpeakerPage from '@/pages/SpeakerPage'
import TransportPage from '@/pages/TransportPage'
import StaffPage from '@/pages/StaffPage'
import NotFound from '@/pages/NotFound'

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
      path: '/agenda/:agendumIdOrDay?/:slug?',
      name: 'AgendaPage',
      component: AgendaPage,
    },
    {
      path: '/speakers/:agendumIdOrDay?/:slug?',
      name: 'SpeakerPage',
      component: SpeakerPage,
    },
    {
      path: '/transport',
      name: 'TransportPage',
      component: TransportPage,
    },
    {
      path: '/staff',
      name: 'StaffPage',
      component: StaffPage,
    },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Return to last position for `popstate` (i.e. click Next/Prev button of browser)
      return savedPosition
    } else if (to.hash) {
      // URL hash navigation
      return { selector: to.hash }
    } else if (to.name !== from.name) {
      // Scroll to top if change page
      return { x: 0, y: 0 }
    }
  },
})

export default router
