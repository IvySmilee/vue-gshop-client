/*路由器*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由组件*/
/*import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
*/
/*路由组件懒加载：打包时进行代码分割：只有当需要时从后台获取*/
const Msite=()=>import('../pages/Msite/Msite.vue');
const Search=()=>import('../pages/Search/Search.vue');
const Order=()=>import('../pages/Order/Order.vue');
const Profile=()=>import('../pages/Profile/Profile.vue');


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'


Vue.use(VueRouter);

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        isShow:true
      }
    },{
      path:'/order',
      component:Order,
      meta:{
        isShow:true
      }
    },{
      path:'/profile',
      component:Profile,
      meta:{ //配置：用来控制footerguide什么时候显示
        isShow:true
      }
    },{
      path:'/search',
      component:Search,
      meta:{
        isShow:true
      }
    },{
      path:'/login',
      component:Login
    }, {  //商家
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },{
          path:'/shop/ratings',
          component:ShopRatings
        },{
          path:'/shop/info',
          component:ShopInfo
        },{
          path:'',
          redirect:'/shop/goods'
        }
      ]
    },{
      path:'/',
      redirect:'/msite'
    }
  ]
})
