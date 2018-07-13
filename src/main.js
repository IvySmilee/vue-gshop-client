import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'

import './mock/mockServer' //只需要引入即可
import './filters'
import loading from './common/imgs/loading.gif'

/*图片懒加载*/
Vue.use(VueLazyload,{
  loading
});//内部会注册一个全局指令：lazy，后面组件中使用时用v-lazy=''

//全局注册组件标签，所有组件都可以直接用
Vue.component(Button.name,Button);
Vue.component('Split',Split);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,  //注册路由器
  store  //注册store
});
