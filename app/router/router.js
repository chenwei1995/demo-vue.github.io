import app from '../app';
import login from '../pages/login/login';
import base from '../pages/base/index';
import index from '../pages/index/index';
import goodsIndex from '../pages/goods/index';
import orderIndex from '../pages/order/index';
import vip from '../pages/vip/index';
import goodsDetail from '../pages/goods/nav/detail';
import goodsInfo from '../pages/goods/class/index';
import goodscont from '../pages/goods/class/info';
import goodseval from '../pages/goods/class/eval';

// const app = resolve => require(['../app.vue'], resolve)
// const login = resolve => require(['../pages/login/login.vue'], resolve)
// const base = resolve => require(['../pages/base/index.vue'], resolve)
// const index = resolve => require(['../pages/index/index.vue'], resolve)
// const goodsIndex = resolve => require(['../pages/goods/index.vue'], resolve)
// const orderIndex = resolve => require(['../pages/order/index.vue'], resolve)
// const vip = resolve => require(['../pages/vip/index.vue'], resolve)
// const goodsDetail = resolve => require(['../pages/goods/nav/detail.vue'], resolve)
// const goodsInfo = resolve => require(['../pages/goods/class/index.vue'], resolve)

console.log(app);

export default[
  {
    path:'/',
    component:app,
    children:[
      {
        path:'',
        component:login
      },{
        path:'/index',
        component:base,
        children:[
          {
            path:'/index/',
            component:index
          },{
            path:'/goods',
            component:goodsIndex
          },{
            path:'/order',
            component:orderIndex
          },{
            path:'/vip',
            component:vip
          }
        ]
      }
    ]
  },{
    path:'/goods/detail/',
    component:goodsDetail,
    children:[
      {
        path:'/goods/detail/:id',
        component:goodsInfo
      },{
        path:'/goods/info',
        component:goodscont
      },{
        path:'/goods/eval',
        component:goodseval
      }
    ]
  }
]

console.log('yes,you good');
