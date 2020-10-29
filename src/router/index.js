import { createRouter, createWebHistory } from 'vue-router'

import Film from '../views/Film'
import Center from '../views/Center'
import Cinema from '../views/Cinema'

import Comingsoon from '../views/films/Comingsoon'
import Nowplaying from '../views/films/Nowplaying'
import Detail from '../views/Detail'
import Login from '../views/Login'

// const auth = {
//   isLogin () {
//     return false
//   }
// }
const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/nowplaying', // 路径可以写成'nowplaying'
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id', // 动态路由，匹配/detail/{*}
    name: 'futuredetail',
    component: Detail
  },
  {
    path: '',
    redirect: '/film/nowplaying'
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 全局守卫
/* router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path === '/center') {
    console.log('盘查', to)

    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}) */

// 导出路由
export default router
