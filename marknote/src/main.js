import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('date', time => moment(time).format('YY/MM/DD HH:mm'))

new Vue({
  render: h => h(App),
}).$mount('#app')
