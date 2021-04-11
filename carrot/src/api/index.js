import Vue from 'vue'
import qs from 'qs'

export * from './fox'

export const getToken = () =>
  Vue.axios.get('token/')

export const getRestTime = (gameCode) =>
  Vue.axios.get(`schedule?game_code=${gameCode}`)
