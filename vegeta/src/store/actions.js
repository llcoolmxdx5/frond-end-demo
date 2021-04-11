import Vue from 'vue'
// import {
// } from '@/api'
import * as types from './types'
import { _axios } from '@/plugins/axios'
import { setIndicator } from '@/assets/js/utils'

export default {
  initLatestResultMap: ({ commit }, result) => {
    commit(types.INIT_LATEST_RESULT_MAP, result)
  },
  refreshResult: ({ commit }) => {
    commit(types.REFRESH_RESULT)
  },
  updateLatestResultMap: ({ commit }, { gameCode, latestResult }) => {
    commit(types.UPDATE_LATEST_RESULT_MAP, { gameCode, latestResult })
  }
}
