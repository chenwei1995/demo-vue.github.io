<template lang="html">
  <div class="wrap">
    <div class="banner" v-if = "dataPush != ''">
      <div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="item in dataPush[0]"><router-link :to="item.link"><img :src="item.imgUrl" alt=""></router-link></div>
		        </div>
		        <!-- Add Pagination -->
		        <div class="swiper-pagination"></div>
		    </div>
  	</div>
    <router-view></router-view>
    <nav class="nav-index clearfix">
      <router-link to='/index/'>首页</router-link>
      <router-link to='/goods'>商品</router-link>
      <router-link to='/order'>订单</router-link>
      <router-link to='/vip'>会员</router-link>
    </nav>
  </div>
</template>

<script>
require('../../css/swiper.css');
require('../../scripts/swiper.min.js');
import axios from 'axios';
import Vue from 'vue';

export default {
  data (){
    var _self = this;
    return {
      dataPush:[],
      getdata:function(){
        axios.get('../app/data/banner.json')
          .then(function(data){
            _self.dataPush.push(data.data);
            Vue.nextTick(function(){
              _self.getbanner();
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      getbanner:function(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 2,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
          });
      }
    }
  },
  mounted (){
    this.getdata();
  }
}
</script>

<style media="screen" src="../../css/index.css"></style>
