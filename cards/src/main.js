import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/transitions.css'
import '../src/assets/css/style.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
