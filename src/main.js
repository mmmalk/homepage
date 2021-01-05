import Vue from 'vue'
import App from './App.vue'
import router from '../routes/index.js'
import { IconsPlugin } from 'bootstrap-vue'
import { VBTogglePlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'
import { CollapsePlugin } from 'bootstrap-vue'

Vue.use(IconsPlugin)
Vue.use(VBTogglePlugin)
Vue.use(ButtonPlugin)
Vue.use(CollapsePlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
