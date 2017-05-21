<template lang="html">
  <div class="goods-detail" @click="setHide">
    <div class="banner-goods">
      <div class="swiper-container">
        <div class="swiper-wrapper">
              <div class="swiper-slide">如何取banner参考</div>
              <div class="swiper-slide">首页，首页有列子</div>
              <div class="swiper-slide">就这样把</div>
              <div class="swiper-slide">到此为止</div>
              <div class="swiper-slide">真到底了</div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-custom"></div>
    </div>
    <div class="goods-title">
      <p>{{data.title}}</p>
      <span>[京东自营]品牌放心</span>
    </div>
    <div class="jd-ious">
      <p>白条 <span>【白条支付】首单最高立减8元</span></p>
      <p>促销 <span><i>限制</i>
        <!-- <p style="display:none">可享受以下优惠</p> -->
        <span>此价格不与套装优惠同时享受</span>
      </span></p>
    </div>
    <div class="goods-select">
      <div class="goods-selected" @click="getSetClassList">
        已选 <span>奶油蛋糕 1kg</span>
      </div>
      <div class="goods-select-list">
        <p>选择</p>
        <div class="clearfix" @click="">
          <div class="list active" data-tag="goods">奶油蛋糕 1kg</div>
          <div class="list" data-tag="goods">蓝莓奶油蛋糕 1kg</div>
          <div class="list" data-tag="goods">草莓奶油蛋糕 1kg</div>
          <div class="list" data-tag="goods">奶香鸡蛋蛋糕 1kg</div>
        </div>
      </div>
    </div>
    <div class="goods-eval">
      不想写了,累
    </div>
    <div class="goods-buy">
      <router-link to="/goods/buy">点击购买</router-link>
      <button type="button" name="button">加入购物车</button>
    </div>
  </div>
</template>

<script type="text/babel">
import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter();

export default {
  data (){
    let flag = false,
        that = this;
    return {
      data:[],
      getdata:function(){
        axios.get('../demo-vue.github.io/app/data/'+this.$route.params.id+'/goodsDetail.json')
          .then(function(data){
            that.data = data.data;
            console.log(that.data);
          })
          .catch(function(error){
            console.log(error);
          })
      },
      getBanner:function(){
        var swiper = new Swiper('.swiper-container', {
          pagination : '.swiper-pagination',
          paginationType : 'custom',
          paginationCustomRender: function (swiper, current, total) {
              return current + ' / ' + total;
          }
        });
      },
      getSetClassList:function(e){
        var show = document.querySelector('.goods-select-list');

        if(!flag){
          show.style.transform = 'translate(0,0)';
          flag = true;
        }else{
          show.style.transform = 'translate(0,100%)';
          flag = false;
        }
        e.cancelBubble = true;
      },
      setHide:function(){
          // body...
          var show = document.querySelector('.goods-select-list');

          show.style.transform = 'translate(0,100%)';
          flag = false;
      },
      getSet:function(e){
        var set = document.querySelector('.goods-selected span');
        var e = e || window.event;
    		var src = e.srcElement || e.target;

    		if( src.getAttribute('data-tag') == "goods" ){
    			var b = src.parentNode.children;
    			for ( var i = 0; i<b.length; i++ ) {
    				b[i].classList.remove('active')
    			}
          src.classList.add('active')
    		}


      }
    }
  },
  mounted (){
    // alert(111)
    this.getdata();
    this.getBanner();
  }
}
</script>

<style media="screen" src="../../../css/goods-detail.scss" lang="scss"></style>
