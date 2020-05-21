import Vue from 'vue'
import Router from 'vue-router'
import LineChart from "@/components/LineChart"
import PieChart from "@/components/PieChart"
import ForceChart from "@/components/ForceChart"
import MapChart from "@/components/MapChart"
import Table from "@/components/Table"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lineChart',
      name: 'LineChart',
      name_z : "折线图",
      icon : "area-chart",
      component: LineChart
    },
    {
      path: '/pieChart',
      name: 'PieChart',
      name_z : "饼状图",
      icon : "pie-chart",
      component: PieChart
    },
    {
      path: '/forceChart',
      name: 'ForceChart',
      name_z : "力导图",
      icon : "dot-chart",
      component: ForceChart
    },
    {
      path: '/mapChart',
      name: 'MapChart',
      name_z : "地图",
      icon : "sliders",
      component: MapChart
    },
    {
      path: '/table',
      name: 'Table',
      name_z : "表格",
      icon : "table",
      component: Table
    }
  ]
})
