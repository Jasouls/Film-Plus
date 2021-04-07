import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
Vue.config.productionTip = false

Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
