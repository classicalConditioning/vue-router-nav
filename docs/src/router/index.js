import Vue from 'vue'
import Router from 'vue-router'
import Second from '../routes/Second'
import First from '../routes/First'
import Third from '../routes/Third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    }      
  ]
})
