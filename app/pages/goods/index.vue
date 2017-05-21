<template lang="html">
  <div class="iscroll-box">
    <div class="scroll-box">
      <ul>
        <li v-for="key in data">
          <router-link :to="'/goods/detail/'+key.id">
            <div class="left goods-img">
              <img :src="key.imgUrl" alt="">
            </div>
            <div class="left goods-txt">
              <h3>{{key.title}}</h3>
              <b>￥{{key.price}}</b>
              <span>{{key.auto}}</span>
            </div>
          </router-link>
          <button>★</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
require('../../scripts/iscroll.js');

var myScroll;

export default {
  data (){
    var that = this;
    return {
      data:[],
      getdata:function(){
        axios.get('../demo-vue.github.io/app/data/goods.json')
          .then(function(data){
            that.data = data.data;
            console.log(data);
          })
          .catch(function(error){
            console.log(error);
          })
      },
      iscroll:function(){
        myScroll = new IScroll('.iscroll-box', {
      		scrollbars: true,
      		mouseWheel: true,
      		interactiveScrollbars: true,
      		shrinkScrollbars: 'scale',
      		fadeScrollbars: true
      	});
      },
      getHeight:function(){
        setTimeout(function() {
          // body...
          var h1 = document.querySelector('.banner').offsetHeight,
              h2 = document.querySelector('.nav-index').offsetHeight,
              h3 = document.documentElement.clientHeight,
              setH = document.querySelector('.iscroll-box');

          setH.style.height = h3 - h2 -h1 +'px';
          that.iscroll();
          that.refresh()
        }, 100);
      },
      refresh:function(){
        myScroll.on('scrollEnd', function() { // 滚动结束
          var height = this.y,
              bottomHeight = this.maxScrollY - height;
          if (bottomHeight < 60 && bottomHeight >= 0) {
              alert('已经到底了！！！');
              return;
          }
        });
      }
    }
  },
  mounted (){
    this.getdata();
    this.getHeight()
  }
}
</script>

<style media="screen" src="../../css/goods.scss" lang="scss"></style>
