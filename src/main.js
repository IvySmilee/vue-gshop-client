import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,  //注册路由器
  store  //注册store
});
