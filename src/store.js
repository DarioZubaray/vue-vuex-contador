import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: 'Contador',
    counter: 0
  },
  mutations: {
    increment (state, amount) {
      state.counter += amount
    },
    decrement (state, amount) {
      state.counter -= amount
    }
  },
  actions: {

  }
})
