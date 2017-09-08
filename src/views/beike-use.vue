<template>
  <div class="page-ct">
    <mt-header title="贝壳使用">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="beike-detail">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div class="beike-title">贝壳使用说明</div>
      <p>关注【贝壳共享】微信公众号，贝壳可直接哉贝壳商城兑换商品，参与抽奖等。更对贝壳使用场景敬请期待！</p>
      <img src="../assets/images/beike-ercode.png" alt="" class="er-code">
      <div class="er-code-tip">截屏后扫码关注</div>
    </div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'beikeUse',
  data () {
    return {
    }
  },
  components:{
    // headerItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$baseColor:#06816c;
.page-ct{
  background: #f3f3f3;
}
.beike-detail{
  margin:0.3rem 0.15rem;
  padding:0.6rem 0 0.3rem;
  background: #fff;
  text-align: center;
  overflow: hidden;
  img.logo{
    width:1.9rem;
    height: auto;
  }
  .beike-title{
    margin:0.3rem auto 0.7rem;
    text-align: center;
    font-size: 0.4rem;
    color:#999;
  }
  p{
    padding:0 0.4rem;
    font-size: 0.28rem;
    text-indent: 2em;
    color:#999;
  }
  img.er-code{
    margin:1.6rem 0 0.06rem;
    width:2.96rem;
    height:auto;
  }
  .er-code-tip{
    font-size: 0.4rem;
    color:#999;
  }
}
</style>
