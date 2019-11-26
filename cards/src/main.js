import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/transitions.css'
import '../src/assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
