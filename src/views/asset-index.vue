<template>
  <div class="page-ct">
    <mt-header title="资产管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-head">
      <mt-swipe :auto="10000">
        <mt-swipe-item>
          <div class="yesterday-income">3.62</div>
          <div class="yesterday-income-tips">昨日车辆收益：元／辆</div>
          <div class="income-addtion">
            <div>7天累计： 0.00元</div>
            <div>7天年化： 0.00%</div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="yesterday-income">3.62</div>
          <div class="yesterday-income-tips">昨日纸巾收益：元</div>
          <div class="income-addtion">
            <div>7天累计： 0.00元</div>
            <div>7天年化： 0.00%</div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="page-content">
      <div class="page-content-list">
        <div><img src="../assets/images/asset-icon1.png" alt=""></div>
        我的资产
        <router-link to="/assetAccout" slot="left"><i></i></router-link>
      </div>      
      <div class="page-content-list">
        <div><img src="../assets/images/asset-icon2.png" alt=""></div>
        收支明细
        <router-link to="/assetDetail" slot="left"><i></i></router-link>
      </div>      
      <div class="page-content-list">
        <div><img src="../assets/images/asset-icon3.png" alt=""></div>
        账户预留
        <router-link to="/assetReserve" slot="left"><i></i></router-link>
      </div>      
    </div>
  </div>
</template>
<script>
// import headerItem from '@/components/header';
export default {
  name: 'personal-center',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$baseColor:#06816c;
$basebgColor:#f3f3f3;
.page-ct{
  background: $basebgColor;
}
.page-head{
  height:4rem;
  background: $baseColor;
  color:#fff;
  text-align: center;
  .mint-swipe{
    padding:0.1rem 0 0;
  }
  .mint-swipe-indicators{
    bottom:0.2rem;
    .mint-swipe-indicator{
      background: #aeabb0;
      opacity: 0.8;
    }
    .mint-swipe-indicator.is-active {
      background: #fff;
    }
  }
  .yesterday-income{
    font-size: 1.12rem;
  }
  .yesterday-income-tips{
    font-size: 0.28rem;
    margin-bottom: 0.6rem;
  }
  .income-addtion{
    overflow: hidden;
    div{
      float: left;
      width:50%;
      font-size: 0.32rem;
      color:#fff;
      box-sizing: border-box;
      padding:0.07rem 0;
    }
    div:nth-of-type(1){
      border-right:1px solid #fff;
    }
  }

}
.page-content-list{
  height: 0.88rem;
  line-height:0.88rem;
  font-size: 0.32rem;
  color:$baseColor;
  background: #fff;
  border-bottom:1px solid #ccc;
  padding:0 0.5rem;
  div{
    float: left;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100%;
    margin-right:0.2rem;
    img{
      width:0.44rem;
      height:auto;
    }
  }
  span{
    float: right;
    color:#999;
    margin-right:0.25rem;
  }
  i{
    float: right;
    margin-top:0.31rem;
    width:0.2rem;
    height: 0.3rem;
    background:url('../assets/images/personal-center-icon5.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
}
.mint-swipe{
  width: 100%;
}
</style>
