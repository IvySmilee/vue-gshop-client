/*路由器*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由组件*/
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


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
    },{
      path:'/',
      redirect:'/msite'
    }
  ]
})
