import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      themeId: localStorage.getItem('themeId')||0,
      colorList : [
        "#1890ff","#1da57a","#7546c9"
      ],
      username : sessionStorage.getItem('username')||""
    },
    mutations: {
        themeUpdate (state,themeId) {
            state.themeId = themeId;
            localStorage.setItem('themeId',themeId);
        },
        loginValid (state,param){
          state.username = param.username;
          sessionStorage.setItem("username",param.username);
          sessionStorage.setItem("password",param.password);
        }
    }
  })
export default store;