import Vue from 'vue'
import Router from 'vue-router'
import inicio from './views/inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    
  ]
})
