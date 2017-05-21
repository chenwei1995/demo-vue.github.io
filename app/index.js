import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './router/router.js';

require('./css/base.css');

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  beforeCreate: function () {
    let id = window.localStorage.getItem('id');
    if(id){
      // router.push('/index');
    }
  }
}).$mount('#app')
