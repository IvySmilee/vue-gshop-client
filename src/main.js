import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'

import './mock/mockServer' //只需要引入即可
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
