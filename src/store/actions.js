/*
vuex的actions模块
 */
import {reqAddress, reqFoodTypes, reqShops,reqUserInfo} from '../api'   //引入接口请求函数
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
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

  //记录用户信息
  recordUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result=await reqUser();
    if(result.code===0){
      commit(RECEIVE_USER_INFO,{userInfo:result.data})
    }
  }
}
