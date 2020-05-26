import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path:"/",
      redirect : "/mapChart"
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/mapChart',
      name: 'MapChart',
      name_z : "地图",
      icon : "sliders",
      component: () => import('@/components/MapChart'),
      meta:{requiresAuth: true}
    },
    {
      path: '/lineChart',
      name: 'LineChart',
      name_z : "折线图",
      icon : "area-chart",
      component: () => import('@/components/LineChart'),
      meta:{requiresAuth: true}
    },
    {
      path: '/pieChart',
      name: 'PieChart',
      name_z : "饼状图",
      icon : "pie-chart",
      component: () => import('@/components/PieChart'),
      meta:{requiresAuth: true}
    },
    {
      path: '/forceChart',
      name: 'ForceChart',
      name_z : "力导图",
      icon : "dot-chart",
      component: () => import('@/components/ForceChart'),
      meta:{requiresAuth: true}
    },
    {
      path: '/table',
      name: 'Table',
      name_z : "表格",
      icon : "table",
      component: () => import('@/components/Table'),
      meta:{requiresAuth: true}
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 设置导航守卫
router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('username');
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login'
    })
  } else {
    if(token && to.name == "Login"){
      next({
        path: '/'
      })
    }else{
      next()
    }
  }
})
export default router;