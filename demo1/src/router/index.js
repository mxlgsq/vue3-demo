import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: () => import('@/pages/Main'),
      children: [
        {path: '', component: () => import('@/components/content/middle/graphic/components')}
      ]
    }
  ]
})
