import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getWorldRatio() {
  return 1 / 1920 * window.innerWidth
}

export default new Vuex.Store({
  state: {
    worldRatio: getWorldRatio(),
    turn: 1,
    players: [
      { name: 'Anne of Cleves' },
      { name: 'William the Bald' }
    ],
    currentPlayerIndex: Math.round(Math.random()),
    testHand: [],
    activeOverlay: null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
