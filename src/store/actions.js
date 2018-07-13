/*
vuex的actions模块
 */
import {reqAddress, reqFoodTypes, reqShops,reqUserInfo,reqLogout,
reqShopGoods,reqShopRatings,reqShopInfo} from '../api'   //引入接口请求函数
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
import {reqUser} from "../api/index";

export default {
  //异步获取地址信息的异步action
  async getAddress({commit,state}){
    const {latitude,longitude}=state;
    const geohash=`${latitude},${longitude}`;
    //发送异步请求，得到相应数据
    const result=await reqAddress(geohash);//{code:0,data:address}
    if(result.code===0){
      //提交mutation
      const address=result.data; //一定要对应state里面的属性名
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取分类列表的异步action
  async getCategorys ({commit, state}) {
    // 发送异步请求, 得到响应数据
    const result = await reqFoodTypes();  // {code: 0, data: types}
    if(result.code===0) {
      // 提交mutation
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表的异步action
  async getShops ({commit, state}) {
    const {latitude, longitude} = state;
    // 发送异步请求, 得到响应数据
    const result = await reqShops({latitude, longitude});  // {code: 0, data: shops}
    if(result.code===0) {
      // 提交mutation
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //同步记录用户信息
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  //异步获取当前用户信息
  async getUser({commit}){
    const result=await reqUser();
    if(result.code===0){
      const user=result.data;
      commit(RECEIVE_USER,{user})
    }
  },
  //异步请求退出登录
  async logout({commit}){
    const result =await reqLogout();
    if(result.code===0){
      commit(RESET_USER);
    }
  },

  /*MOCK数据*/
  //异步获取商品列表,cb回调函数
  async getShopGoods ({commit},cb){
    const result=await reqShopGoods();
    if(result.code===0){
      const goods=result.data;
      commit(RECEIVE_GOODS,{goods});
      cb && cb();//在状态改变后，调用回调（自定义回调）
    }
  },
  //异步获取商家评价
  async getShopRatings({commit},cb){
    const result=await reqShopRatings();
    if(result.code===0){
      const ratings=result.data;
      commit(RECEIVE_RATINGS,{ratings});
      cb && cb();
    }
  },
  //异步获取商家信息
  async getShopInfo({commit}){
    const result=await reqShopInfo();
    if(result.code===0){
      const info=result.data;
      commit(RECEIVE_INFO,{info});
    }
  },

  //同步更新指定food数量
  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  //同步清空购物车的action
  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
