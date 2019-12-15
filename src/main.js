import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from "@/components/Login";
import Register from "@/components/Register";
import Ideas from "@/components/Ideas";


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  //{path: '/', component: HelloWorld },
  {path: '/', component: Login },
  {path: '/register', component: Register },
  {path: '/ideas/:user_id', component: Ideas },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
