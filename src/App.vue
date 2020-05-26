<template>
  <div class="app">
    <a-menu mode="horizontal" v-model="current" theme="dark">
        <a-menu-item @click="menuHandle(menu.name)" v-for="menu in menuList" :key="menu.name"> <a-icon :type="menu.icon" />{{menu.name_z}}</a-menu-item>
        <a-dropdown :trigger="['click']" class="theme-item">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-icon type="skin"/> 切换主题 <a-icon type="down" />
          </a>
          <a-menu slot="overlay" @click="themeUpdate">
            <a-menu-item key=0>
              蓝
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key=1>
              绿
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key=2>
              紫
            </a-menu-item>
          </a-menu>
        </a-dropdown>
    </a-menu>
    <router-view class="main-container"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name : "App",
      menuList : this.$router.options.routes.filter((value, index, arr) => {
        return value.name && value.name != 'Login';
      }),
      current : []
    };
  },
  beforeCreate(){
      this.$loading(1);
  },
  created(){
    this.themeUpdate({key:this.$store.state.themeId});
  },
  methods : {
    menuHandle(name){
      this.$loading(1);
      this.$router.push({ name: name });
    },
    themeUpdate(e){
      let themeId = parseInt(e.key);
      let mainColor = this.$store.state.colorList[themeId];
      this.$store.commit('themeUpdate',themeId);
      window.less
      .modifyVars(
          {
              '@primary-color': mainColor,
              '@link-color': mainColor,
              '@btn-primary-bg': mainColor,
          }
      )
      .then(() => {
          // console.log("主题更换成功");
      })
      .catch(error => {
          // console.log("主题更换失败");
      });
    }
  },
  watch: {
    '$route' (to, from) {
      this.current.push(this.$route.name);
      this.$loading(0);
    }
  }
};
</script>
<style scope>
  .app{
    height : 100%;
  }
  .main-container{
    padding : 20px;
  }
  .theme-item{
    float:right;
    margin-right : 20px;
  }
</style>
