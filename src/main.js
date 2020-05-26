// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./styles/index.css"

// ant-design
import Antd from "ant-design-vue"
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd)

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// vuex
import store from './store/store'
Vue.config.productionTip = false
// mock
require('./mock/index.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
