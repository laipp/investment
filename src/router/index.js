import Vue from 'vue'
import Router from 'vue-router'
import personalCenter from '@/views/personal-center' //个人中心
import assetIndex from '@/views/asset-index' //资产管理
import assetAccout from '@/views/asset-accout' //我的资产
import assetRecharge from '@/views/asset-recharge' //余额充值
import assetWithdraw from '@/views/asset-withdraw' //余额提现
import assetDetail from '@/views/asset-detail' //收支明细 
import assetReserve from '@/views/asset-reserve' //账户预留
import beikeIndex from '@/views/beike-index' //贝壳投资
import beikeBuy from '@/views/beike-buy' //购买贝壳
import beikeUse from '@/views/beike-use' //贝壳使用
import beikeAbout from '@/views/beike-about' //贝壳使用
import aboutUs from '@/views/aboutUs' //关于我们
import contactUs from '@/views/contactUs' //联系我们
import myBike from '@/views/my-bike' // 我的单车
import bikeBuy from '@/views/bike-buy' // 单车特权


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/assetIndex',
      name: 'assetIndex',
      component: assetIndex
    },
    {
      path: '/beikeIndex',
      name: 'beikeIndex',
      component: beikeIndex
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/assetAccout',
      name: 'assetAccout',
      component: assetAccout
    },
    {
      path: '/assetDetail',
      name: 'assetDetail',
      component: assetDetail
    },
    {
      path: '/assetReserve',
      name: 'assetReserve',
      component: assetReserve
    },
    {
      path: '/assetRecharge',
      name: 'assetRecharge',
      component: assetRecharge
    },
    {
      path: '/assetWithdraw',
      name: 'assetWithdraw',
      component: assetWithdraw
    },    
    {
      path: '/beikeBuy',
      name: 'beikebuy',
      component: beikeBuy
    },
    {
      path: '/beikeUse',
      name: 'beikeUse',
      component: beikeUse
    },
    {
      path: '/beikeAbout',
      name: 'beikeAbout',
      component: beikeAbout
    },
    {
      path: '/bikeBuy',
      name: 'bikeBuy',
      component: bikeBuy
    },
    {
      path: '/myBike',
      name: 'myBike',
      component: myBike
    }
  ]
})
