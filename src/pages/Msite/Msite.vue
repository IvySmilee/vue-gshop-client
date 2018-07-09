<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="categorys.length">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper' //引入swiper的库
  import 'swiper/dist/css/swiper.min.css' //引入swiper的样式
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  
  export default {
    data () {
      return {
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted () {
      this.$store.dispatch('getCategorys');
      this.$store.dispatch('getShops');
    },
    computed:{
      ...mapState(['address','categorys']),
      categorysArr () {
        const {categorys}=this;
        const arr=[];
        let smallArr=[];
        categorys.forEach(c=>{
          //将全新的小数组添加到大数组中
          if(smallArr.length===0){
            arr.push(smallArr)
          }
          //将当前分类保存到小数组中
          smallArr.push(c);
          //如果刚好满了，为后面创建一个新的小数组
          if(smallArr.length===8){
            smallArr=[]
          }
        });
        return arr;
      }
    },
    watch:{//深度监视 (实现轮播分页)
      // 更新状态数据后, 界面会异步更新
      categorys (val) { // 状态数据改变了, 但界面还没有更新
        /*setTimeout(() => { //不够精良,不确定等待的时间
          new Swiper('.swiper-container', {
            pagination: { // 圆点指示器的容器div
              el: '.swiper-pagination'
            },
            loop: true, // 可以循环轮播
          })
        }, 100)*/
        // 回调是在当前数据变化的DOM更新之后自动调用
        this.$nextTick(function () { //该方法必须写在数据改变之后
          //将回调函数延迟到dom更新循环之后执行。 在修改数据之后立即执行，然后等待dom更新
          new Swiper('.swiper-container', { //配置选项,Swiper是同步代码
            pagination: { //圆点指示器
              el: '.swiper-pagination', //圆点指示器的容器div的类名
            },
            loop: true //循环轮播
          })
        })
      }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
   .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
