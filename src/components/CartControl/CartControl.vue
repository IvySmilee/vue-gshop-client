<template>
  <div class="cartcontrol">
    <transition name="move"><!--v-show:添加display属性，v-if：是删除标签-->
      <div class="iconfont icon-remove_circle_outline"
           v-show="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle"
         @click.stop="updateFoodCount(true)"></div>
    <!--.stop：阻止冒泡：防止点击加减时出现food大图详情-->
  </div>

</template>

<script>
  export default {
    props:{
      food:Object
    },
    methods:{
      //更新food的count
      updateFoodCount (isAdd){
        const food=this.food;
        this.$store.dispatch('updateFoodCount',{food,isAdd})
      }
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    
    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active,&.move-leave-active
        transition all 0.5s
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>


