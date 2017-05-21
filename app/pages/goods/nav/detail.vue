<template lang="html">
  <div class="goods-detail-nav">
    <div class="clearfix goods-back">
      <button @click="back">back</button>
      <div class="goods-nav">
        <router-link :to="'/goods/detail/'+data.id">商品</router-link>
        <router-link to="/goods/info">详情</router-link>
        <router-link to="/goods/eval">评价</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter();

export default {
  data (){
    return {
      data:{
        id:this.$route.params.id
      },
      back:function(){
        router.go(-1)
      }
    }
  }
}
</script>

<style lang="css">
.goods-back{
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f06;
  width: 100%;
}
.goods-back button{
  line-height: 40px;
  color: #fff;
  margin-left: 10px;
  border: 0;
  background:none;
}
.goods-back .goods-nav{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,0);
}
.goods-back .goods-nav a{
  display: inline-block;
  font-size: 13px;
  line-height: 40px;
  padding: 0 15px;
  color: #fff;
}
.goods-back .goods-nav .router-link-exact-active{
  background-color: #4d2734;
}
</style>
