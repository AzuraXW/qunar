import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

// 初始化样式
import 'normalize.css/normalize.css'
// 图标样式
import './assets/css/iconfont.css'
// fastclick
import fastClick from 'fastclick'
fastClick.attach(document.body)
// flexible
import 'lib-flexible/flexible'


Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
