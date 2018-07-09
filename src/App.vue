<template>
  <div id="app">
    <router-view/>
    <!--v-show="$route.meta.isShow"：接收路由index.js中的配置-->
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted(){
    //异步获取address
    this.$store.dispatch('getAddress');
    //异步获取扥估用户信息
    this.$store.dispatch('getUserInfo')
  },
  components:{
    FooterGuide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
