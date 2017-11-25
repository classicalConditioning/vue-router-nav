import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RouterNav from 'vue-router-nav'

Vue.use(RouterNav)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
