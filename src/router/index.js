import Vue from 'vue'
import Router from 'vue-router'
import LineChart from "@/components/LineChart"
import PieChart from "@/components/PieChart"
import ForceChart from "@/components/ForceChart"
import MapChart from "@/components/MapChart"
import Table from "@/components/Table"
import LoginPage from "@/components/Login"

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path:"/",
      redirect : "/lineChart"
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/lineChart',
      name: 'LineChart',
      name_z : "折线图",
      icon : "area-chart",
      component: LineChart,
      meta:{requiresAuth: true}
    },
    {
      path: '/pieChart',
      name: 'PieChart',
      name_z : "饼状图",
      icon : "pie-chart",
      component: PieChart,
      meta:{requiresAuth: true}
    },
    {
      path: '/forceChart',
      name: 'ForceChart',
      name_z : "力导图",
      icon : "dot-chart",
      component: ForceChart,
      meta:{requiresAuth: true}
    },
    {
      path: '/mapChart',
      name: 'MapChart',
      name_z : "地图",
      icon : "sliders",
      component: MapChart,
      meta:{requiresAuth: true}
    },
    {
      path: '/table',
      name: 'Table',
      name_z : "表格",
      icon : "table",
      component: Table,
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