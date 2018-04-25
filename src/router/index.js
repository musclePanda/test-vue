import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main/main'
import InInfoAd from '@/components/wholesaleMarket/inInfoAdd'
import InInfoGrid from '@/components/wholesaleMarket/inInfoGrid'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'inInfoAdd',
          name: 'inInfoAdd',
          component: InInfoAd
        },
        {
          path: 'inInfoGrid',
          name: 'inInfoGrid',
          component: InInfoGrid
        }
      ]
    }
  ]
})
