import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router)

import CommonLayout from "@/layout"

const routes = [{
  path: '/',
  component: CommonLayout,
  redirect: '/titleAttr1',
  children: [
    {
      path: 'titleAttr1',
      component: () => import('@/views/attribute/title'),
      name: 'titleAttr1',
      meta: { parentKey: '1', key: '1-1'}
    },
    {
      path: 'titleAttr2',
      component: () => import('@/views/attribute/grid'),
      name: 'titleAttr2',
      meta: { parentKey: '1', key: '1-2'}
    },
    {
      path: 'titleAttr3',
      component: () => import('@/views/attribute/grid1'),
      name: 'titleAttr3',
      meta: { parentKey: '1', key: '1-3'}
    },
    {
      path: 'lineChart',
      component: () => import('@/views/charts/line'),
      name: 'lineChart',
      meta: { parentKey: '2', key: '2-1'}
    },
    {
      path: 'barChart',
      component: () => import('@/views/charts/bar'),
      name: 'barChart',
      meta: { parentKey: '2', key: '2-2'}
    },
    {
      path: 'pieChart',
      component: () => import('@/views/charts/pie'),
      name: 'pieChart',
      meta: { parentKey: '2', key: '2-3'}
    }
  ]
}]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router