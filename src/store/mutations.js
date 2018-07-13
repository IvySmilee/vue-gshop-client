import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address;
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER] (state,{user}){
    state.user=user
  },
  [RESET_USER] (state){
    state.user={}
  },
  //mock模拟数据
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state,{food}){//第一次没有food
    if(!food.count){//第一次food.count为1
      //给food新添加一个新的属性（没有数据绑定），并属性值为1
      // food.count=1;
      // 问题: 新添加的属性没有数据劫持==>数据绑定==>更新了数据但界面不变
      /*
      * 给有数据绑定的对象添加指定属性名和值的属性(有绑定)
      *  vue的方法：$set:给food，添加count属性，属性值为1，这样新添加的属性就有数据绑定
      *  this.$set(food,'count',1); //不能直接在vuex里面使用this（vm）
      * */
      Vue.set(food,'count',1);  // 使用vue的方式
      //将一个新的food添加到购物车
      state.cartFoods.push(food);
    }else{
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){ //只有count大于0时才能进来
      food.count--;
      if(food.count===0){
        //从购物车中移除food
        state.cartFoods.splice(state.cartFoods.indexOf(food,),1)
      }
    }
  },
  [CLEAR_CART](state){
    //所有food的count设置为0
    state.cartFoods.forEach(food=>food.count=0);
    //重置购物车失误数组
    state.cartFoods=[];
  }
}
