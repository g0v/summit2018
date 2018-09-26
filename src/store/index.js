import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BREAKPOINT = 640

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    lang: navigator.language.substring(0, 2).toUpperCase() === "ZH" ? "TW" : "EN",
    scrollY: 0,
    innerWidth: 0,
  },
  getters: {
    isSmallScreen: state => {
      return state.innerWidth <= BREAKPOINT
    },
  },
  mutations: {
    toggleLang(state) {
      const isEn = state.lang === 'EN'
      state.lang = isEn ? 'TW' : 'EN'
    },
    setScrollY(state, payload) {
      state.scrollY = payload.scrollY
    },
    setWindowInnerWidth(state, payload) {
      state.innerWidth = payload.innerWidth
    },
  },
})

export default store
