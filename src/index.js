import Vue from 'vue'
import RouterNav from './RouterNav.vue'

export default {
  install(Vue, options) {
    Vue.component('router-nav', RouterNav);

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(RouterNav)
    }
  } 
}