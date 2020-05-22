import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      themeId: 0,
      colorList : [
        "#1890ff","#1da57a","#7546c9"
      ]
    },
    mutations: {
        themeUpdate (state,themeId) {
            state.themeId = themeId;
        }
    }
  })
export default store;