// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./styles/index.css"

// ant-design
// Vue.use(Antd)
import { Button,Input,Form,Dropdown,Table,Tabs,Tag,Menu, Alert, Spin, Icon, Divider, Checkbox} from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';
import 'ant-design-vue/lib/input/style';
import 'ant-design-vue/lib/form/style';
import 'ant-design-vue/lib/dropdown/style';
import 'ant-design-vue/lib/table/style';
import 'ant-design-vue/lib/tabs/style';
import 'ant-design-vue/lib/tag/style';
import 'ant-design-vue/lib/menu/style';
import 'ant-design-vue/lib/alert/style';
import 'ant-design-vue/lib/spin/style';
import 'ant-design-vue/lib/icon/style';
import 'ant-design-vue/lib/divider/style';
import 'ant-design-vue/lib/checkbox/style';

Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(Dropdown);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Menu);
Vue.use(Alert);
Vue.use(Spin);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Checkbox);

// echarts

//引入基本模板
let echarts = require('echarts/lib/echarts')
 
// 引入折线图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

Vue.prototype.$echarts = echarts

// vuex
import store from './store/store'
Vue.config.productionTip = false

// axis
import axios from 'axios'

// 提示框
import Toast from "./common/Toast/index"
Vue.use(Toast);
// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//       if (stoken) { 
//           config.headers.Authorization = `token ${store.state.username}`;
//       }
//       return config;
//   },
//   err => {
//       console.log(err);
//       return Promise.reject(err);
//   });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data[0].code != 200){
      // this.$message.success('This is a success message');
      Vue.prototype.$toast(`响应错误 : ${response.data[0].msg}`,2);
      return {data : []};
    }else{
      return response.data[0];
    }
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 401:
                  // 返回 401 清除token信息并跳转到登录页面
                  
                  router.replace({
                      path: '/login',
                      query: {redirect: router.currentRoute.fullPath}
                  })
          }
          return Promise.reject(error.response.data)   // 返回接口返回的错误信息
      }
});

Object.defineProperties(Vue.prototype, {
  $http: {
    value: axios,
    writable: false
  }
})
// 注册axios请求为vue的原型，原型名称为$http

// Vue.prototype.$http = axios

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
