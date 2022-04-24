import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'
import './assets/app.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
