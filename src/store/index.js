import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: ""
  },
  getters: {
    readLang(state) {
      return state.lang
    }
  },
  mutations: {
    loadLang(state) {
      state.lang = localStorage.getItem('lang')
    },
    saveLang(state, value) {
      localStorage.setItem("lang", value)
      state.lang = value
    }
  },
  actions: {
  },
  modules: {
  }
})
