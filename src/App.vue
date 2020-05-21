<template>
  <div class="app">
    <a-menu mode="horizontal" v-model="current" theme="dark">
        <a-menu-item @click="menuHandle(menu.name)" v-for="menu in menuList" :key="menu.name"> <a-icon :type="menu.icon" />{{menu.name_z}}</a-menu-item>
    </a-menu>
    <router-view class="main-container"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name : "App",
      menuList : this.$router.options.routes,
      current : [this.$router.options.routes[0].name]
    };
  },
  created(){
     this.$router.push({ name: this.current });
  },
  methods : {
    menuHandle(name){
      this.$router.push({ name: name });
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
</style>
