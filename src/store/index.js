import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    lang: 'EN'
  },
  mutations: {
    toggleLang (state) {
      const isEn = state.lang === 'EN'
      state.lang = isEn ? 'TW' : 'EN'
    }
  }
})

export default store
