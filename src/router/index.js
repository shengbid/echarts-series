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
      path: 'xAxisAttr',
      component: () => import('@/views/attribute/xAxis'),
      name: 'xAxisAttr',
      meta: { parentKey: '1', key: '1-3'}
    },
    {
      path: 'yAxisAttr',
      component: () => import('@/views/attribute/yAxis'),
      name: 'yAxisAttr',
      meta: { parentKey: '1', key: '1-4'}
    },
    {
      path: 'seriesAttr',
      component: () => import('@/views/attribute/series'),
      name: 'seriesAttr',
      meta: { parentKey: '1', key: '1-5'}
    },
    {
      path: 'eventChart',
      component: () => import('@/views/attribute/event'),
      name: 'eventChart',
      meta: { parentKey: '1', key: '1-5'}
    },
    {
      path: 'dataZoom',
      component: () => import('@/views/attribute/dataZoom'),
      name: 'dataZoom',
      meta: { parentKey: '1', key: '1-7'}
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
      path: 'candlestickChart',
      component: () => import('@/views/charts/candlestick'),
      name: 'candlestickChart',
      meta: { parentKey: '2', key: '2-3'}
    },
    {
      path: 'mapChart',
      component: () => import('@/views/charts/map'),
      name: 'mapChart',
      meta: { parentKey: '2', key: '2-4'}
    }
  ]
}]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router