import Vue from 'vue'
import Chatime from 'chatime.js'

const ChatimeVue = {
  install(Vue) {
    Vue.prototype.$chatime = Chatime
  }
}

Vue.use(ChatimeVue)
