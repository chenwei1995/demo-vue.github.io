<template lang="html">
  <div class="login">
    <div class="login-head clearfix">
      <div class="left"><router-link to='#'>back</router-link></div>
      <div class="right"><router-link to='/index'>home</router-link></div>
    </div>
    <div class="login-input">
      <label><input type="text" value="" class="user-name" placeholder="输入用户名"></label>
      <label><input type="text" value="" class="password" placeholder="输入用户密码"></label>
      <button type="button" name="button" @click='login'>登陆</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import routes from '../../router/router.js';

Vue.use(VueRouter);

const router = new VueRouter();

export default {
  data (){
    return {
      login:function(){
        var userName = document.querySelector('.user-name');
        var password = document.querySelector('.password');
        let arr,
            tips;
        axios.get('../demo-vue.github.io/app/data/login.json')
          .then(function (response) {
            arr = response;
            console.log(arr.data)
        //  alert(1)
            for(var i = 0; i<arr.data.length; i++){
              if(userName.value == arr.data[i].name && password.value == arr.data[i].password){
                tips = '登陆中...';
                router.push('/index');
                window.localStorage.setItem('id','95ascd65se63');
                break;
              }else{
                tips = '输入的账号或者密码有误！';
                //
              }
            }
            console.log(tips);
          })
          .catch(function (error) {
            console.log(error);
          });


      }
    }
  }
}
</script>

<style lang="scss" src="../../css/login.scss"></style>
