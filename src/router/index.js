import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../components/home'
import operationCenter from '../components/operationCenter'
import userCenter from '../components/userCenter'
import fullScreen from '../views/fullScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      redirect: {name: "operationCenter"},
      // component: resolve => { require(['../components/home'], resolve) },
      component:home,
      children:[
        {
          path: '/home/operationCenter',
          name: 'operationCenter',
          component: operationCenter,
        },
        {
          path: '/home/userCenter',
          name: 'userCenter',
          component: userCenter,
        }
      ]
    },
    {
      path: "/fullScreen",
      name: "fullScreen",
      component: fullScreen
    }
  ]
})
