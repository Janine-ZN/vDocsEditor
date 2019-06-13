import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import 'vue-awesome/icons'
import components from '@/plugins/components.js'

import Axios from 'axios'
require('./api/mock')

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(components)
Vue.prototype.$axios = Axios

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
