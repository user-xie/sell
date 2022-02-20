import Vue from 'vue'
import "@/assets/css/reset.less"
import "@/assets/font/iconfont.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

Vue.prototype.$bus = new Vue();
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
