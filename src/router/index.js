import Vue from 'vue'
import Router from 'vue-router'
import personalCenter from '@/views/personal-center' //个人中心
import assetIndex from '@/views/asset-index' //资产管理
import assetAccout from '@/views/asset-accout' //我的资产
import assetDetail from '@/views/asset-detail' //收支明细 
import assetReserve from '@/views/asset-reserve' //账户预留
import beikeIndex from '@/views/beike-index' //贝壳投资
import aboutUs from '@/views/aboutUs' //关于我们
import contactUs from '@/views/contactUs' //联系我们


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
    }
  ]
})
