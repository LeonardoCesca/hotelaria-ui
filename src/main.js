import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'

import Register from './components/Register'
import Home from './components/Home'

Vue.use(VueMask);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cadastro',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
