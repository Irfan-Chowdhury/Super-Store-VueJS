import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {routes} from './router/index'
const router = new VueRouter({
  // mode:'history', //Routing Modes
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
