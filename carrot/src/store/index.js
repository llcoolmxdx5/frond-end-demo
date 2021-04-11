import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import envelope from './modules/envelope'
import popup from './modules/popup'
import * as types from './types'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      latestResultMap: {},
      isResultRefreshing: false,
      nowGame: ''
    },
    getters: {
      
    },
    mutations: {
      [types.INIT_LATEST_RESULT_MAP]: (state, latestResultMap) => {
        console.log('=-=-=-=-=')
        state.latestResultMap = latestResultMap
      },
      [types.REFRESH_RESULT]: (state) => {
        state.isResultRefreshing = !state.isResultRefreshing
      },
      [types.UPDATE_LATEST_RESULT_MAP]: (state, { gameCode, latestResult }) => {
        state.latestResultMap[gameCode] = latestResult
      }
    },
    actions,
    modules: {
      envelope,
      popup
    }
  })
}
