var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'./app/index');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
  entry:APP_PATH,

  output:{
    path:BUILD_PATH,
    filename:'build.js'
  },

  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true
  },

  module:{
    loaders:[
      {
        test:/\.css$/,
        loaders:['style-loader','css-loader']
      },{
        test:/\.vue$/,
        loader:'vue-loader'
      },{
        test:/\.scss$/,
        exclude:/node_modules/,
        loaders:['style','css','sass']
      },{
        test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
        loader: "babel-loader",
        query: {presets: ['es2015']}
      },{
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
　　　}
    ]
  },

  resolve: {
        // require时省略的扩展名，遇到.vue结尾的也要去加载
        extensions: ['.js', '.vue'],
        // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
        alias: {
            vue: 'vue/dist/vue.js',
            vueRouter: 'vue-router/dist/vue-router.js'
        }
  },

  watch:true

};
