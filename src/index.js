import Vue from 'vue'
import RouterNav from './RouterNav.vue'

export default {
  install(Vue, options) {
    if (!$router) {
      throw new Error('Error: no $router found.')
    } else {
      Vue.component('router-nav', RouterNav);
  
      if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(RouterNav)
      }
    }
  } 
}