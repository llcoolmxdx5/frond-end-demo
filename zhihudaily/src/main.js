import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import '../src/assets/style.css'


Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => {
        return h(App)
    }
})
