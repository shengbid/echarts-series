import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router)

import CommonLayout from "@/layout"

const routes = [{
  path: '/',
  component: CommonLayout,
  redirect: '/home',
  children: [
    {
      path: 'lineChart',
      component: () => import('@/views/line'),
      name: 'lineChart'
    }
  ]
}]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router