import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 引入公用filter */
import filter from '@/mixin/filter'
import { Button } from 'ant-design-vue'

Vue.component(Button.name, Button)

Vue.mixin(filter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
