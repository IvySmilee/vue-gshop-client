/*
* 接口请求函数模块
*   函数的返回值是promise对象
* */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
//http://localhost:3000/position/:geohash
/*export function reqAddress () {
  //${geohash}:params参数，{geohash}：query参数
  return ajax(`position/${geohash}`,{geohash})
}*/
//'/api'是为了配合vue解决跨域问题匹配的路径开头，后台路径没有以/api开头的路由，匹配上后删掉/api
export const reqAddress=geohash=>ajax(`/api/position/${geohash}`);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodsTypes=()=>ajax(`/api/index_category`);
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
///shops?latitude=40.10038&longitude=116.36867]
export const reqShops=({latitude,longitude})=>ajax(`/api/shops`,{latitude,longitude});

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>.............
//  http://localhost:3000/search_shops
//   例子: http://localhost:3000/search_shops?keyword=test&geohash=40.10038,116.36867
export const reqGShops=({keyword,geohash})=>ajax(`/api/search_shops`,{keyword,geohash});

// [5、获取一次性验证码](#5获取一次性验证码)<br/>
// http://localhost:3000/captcha
export const reqCaptcha=()=>ajax(`/api/captcha`);

// [6、用户名密码登陆](#6用户名密码登陆)<br/>..................................
// http://localhost:3000/login_pwd, POST请求
//name  pwd   captcha
export const reqLogin=({name,pwd,captcha})=>ajax(`/api/login_pwd`,{name,pwd,captcha},'POST');

// [7、发送短信验证码](#7发送短信验证码)<br/>
//	http://localhost:3000/sendcode
export const reqMessageCaptcha=(phone)=>ajax(`/api/sendcode`,{phone});


// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>...............................
//	http://localhost:3000/login_sms POST  phone  code
export const reqPhoneLogin=({phone,code})=>ajax(`/api/login_sms`,{phone,code},'POST');

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
//	http://localhost:3000/userinfo
export const reqUserInfo=()=>ajax(`/api/userinfo`);

// [10、用户登出](#10用户登出)<br/>
//	http://localhost:3000/logout
export const reqLogout=()=>ajax(`/api/logout`);

