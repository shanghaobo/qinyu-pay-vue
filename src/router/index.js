import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: ()=>import('@/components/index.vue')
    // },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/components/login.vue')
    },
    {
      path:'/layout',
      name:'Layout',
      component:()=>import('@/layout/index.vue')
    },
    {
      path:'/index',
      name:'index',
      component:Layout,
      children:[
        {
          path:'',
          component:()=>import('@/views/index.vue')
        }
      ]
    }
  ]
})
