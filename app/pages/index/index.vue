<template lang="html">
  <div class="index-wrap">
    <div class="index-list clearfix">
      <div class="index-list-product clearfix" v-for="key in dataInfo.menuFirst">
        <router-link :to="key.link">
          <div class="left product-txt">
            <h3>{{key.title}}</h3>
            <p>{{key.trac}}</p>
            <span v-if="key.pink != ''">{{key.pink}}</span>
          </div>
          <div class="right product-img">
            <img :src="key.imgUrl" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="index-row-menu clearfix">
      <div class="row-25 left" v-for="rowMenu in dataInfo.menuSecond">
        <router-link :to="rowMenu.link">
          <h3>{{rowMenu.title}}</h3>
          <p>{{rowMenu.trac}}</p>
          <img :src="rowMenu.imgUrl" alt="">
        </router-link>
      </div>
    </div>
    <div class="gbanner">
      <router-link :to="dataInfo.gbanner.link">
        <img :src="dataInfo.gbanner.imgUrl" alt="">
      </router-link>
    </div>
    <div class="index-list clearfix">
      <div class="index-list-product clearfix" v-for="key in dataInfo.menuFirst">
        <router-link :to="key.link">
          <div class="left product-txt">
            <h3>{{key.title}}</h3>
            <p>{{key.trac}}</p>
            <span v-if="key.pink != ''">{{key.pink}}</span>
          </div>
          <div class="right product-img">
            <img :src="key.imgUrl" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="index-row-menu clearfix">
      <div class="row-25 left" v-for="rowMenu in dataInfo.menuSecond">
        <router-link :to="rowMenu.link">
          <h3>{{rowMenu.title}}</h3>
          <p>{{rowMenu.trac}}</p>
          <img :src="rowMenu.imgUrl" alt="">
        </router-link>
      </div>
    </div>
    <div class="gbanner">
      <router-link :to="dataInfo.gbanner.link">
        <img :src="dataInfo.gbanner.imgUrl" alt="">
      </router-link>
    </div>
    <div class="index-list-goods clearfix">
      <div class="row-49 left" v-for="key in dataInfo.products">
        <router-link to="#">
          <img :src="key.imgUrl" alt="">
          <p>{{key.trac}}</p>
          <div class="clearfix mt-5">
            <h4 class="left">￥{{key.price}}</h4>
            <router-link class="right similar" to="#">看相似</router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';

  export default {
    data (){
      // let dataInfo = {
      //   products:{}
      // };
      var that = this;
      return {
        dataInfo:{
          menuFirst:{},
          menuSecond:{},
          gbanner:{
            link:'',
            imgUrl:''
          },
          products:{}
        },
        getData:function(){
          axios.get('../demo-vue.github.io/app/data/index.json')
            .then(function(info){
              that.dataInfo = info.data;
            })
            .catch(function(error){
              console.log(error);
            })
        }
      }
    },
    mounted (){
      // console.log(this.dataInfo)
      this.getData()
    }
  }
</script>

<style media="screen" src="../../css/index-home.css"></style>
