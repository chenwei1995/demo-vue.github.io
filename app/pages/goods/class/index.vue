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
        <div class="clearfix">
          <div class="list active">奶油蛋糕 1kg</div>
          <div class="list">蓝莓奶油蛋糕 1kg</div>
          <div class="list">草莓奶油蛋糕 1kg</div>
          <div class="list">奶香鸡蛋蛋糕 1kg</div>
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

<script>
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
      data:{
        title:''
      },
      getdata:function(){
        alert('../demo-vue.github.io/app/data/'+this.$route.params.id+'/goodsDetail.json')
        axios.get('../demo-vue.github.io/app/data/'+this.$route.params.id+'/goodsDetail.json')
          .then(function(data){
            that.data = data.data;
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
      getSet:function(){
        var list = document.querySelectorAll('.goods-select-list .list'),
            show = document.querySelector('.goods-select-list'),
            set = document.querySelector('.goods-selected span');

        list.forEach(function(el,i){
          el.addEventListener('click', function(e) {
            alert(1111);
            return;
            list.forEach(function(el,i){
              el.classList.remove('active');
            })

            el.classList.add('active');
            set.innerHTML = el.innerHTML;
            show.style.transform = 'translate(0,100%)';
            flag = false;
            e.cancelBubble = true;
          },false);
        })
      }
    }
  },
  mounted (){
    this.getBanner();
    this.getSet();
    this.getdata();
  }
}
</script>

<style media="screen" src="../../../css/goods-detail.scss" lang="scss"></style>
