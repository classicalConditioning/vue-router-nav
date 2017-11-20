import Vue from 'vue'
import RouterNav from './RouterNav.vue'

export default {
  install(Vue, options) {
    Vue.component('router-nav', RouterNav);
  } 
}