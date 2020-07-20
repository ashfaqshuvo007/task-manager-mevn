// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import eventBus from './event-bus/index'

//Event Handler bus
Vue.prototype.$eventBus = eventBus


Vue.config.productionTip = false

//Making base url
axios.defaults.baseURL = 'http://localhost:5000'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
