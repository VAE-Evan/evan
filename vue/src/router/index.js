import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Inset from "@/components/inset"
import toView from "@/components/toView"
import redact from "@/components/redact"
import remove from "@/components/remove"
import inQuery from "@/components/inQuery"
import login from "@/components/login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children : [
        {
          path : "/inset",
          component : Inset
        },
        {
          path : "/inset",
          component : Inset
        },
        {
          path : "/toView",
          component : toView
        },
        {
          path : "/redact",
          component : redact
        },
        {
          path : "/del",
          component : remove
        },
        {
          path : "/inQuery",
          component : inQuery
        }
      ]
    },
    {
      path: '/login',
      component : login
    }
  ]
})
