<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  const CLASS_ON='on';
  const CLASS_HALF='half';
  const CLASS_OFF='off';
  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      starClasses () {
        const arr=[];
        const {score}=this;
        const scoreInteger=Math.floor(score);
        //保存n个CLASS_ON
        for (var i = 0; i < scoreInteger; i++) {
          arr.push(CLASS_ON);
        }
        //保存0/1个CLASS_HALF
        if(score*10-scoreInteger*10>=5){
          arr.push(CLASS_HALF)
        }
        //保存n个CLASS_OFF
        while (arr.length<5){
          arr.push(CLASS_OFF);
        }
        return arr;
      }
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
