import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.use(vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
