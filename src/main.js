import Vue from 'vue'
import App from './App.vue'
/* 引入公用filter */
import filter from '@/mixin/filter'

Vue.mixin(filter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
