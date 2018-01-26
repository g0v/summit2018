import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
