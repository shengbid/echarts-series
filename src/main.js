import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 引入公用filter */
import filter from '@/mixin/filter'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

var echarts = require('echarts')
Vue.prototype.$echart = echarts 

Vue.use(ElementUI)

Vue.mixin(filter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
