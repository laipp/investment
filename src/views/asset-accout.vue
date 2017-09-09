<template>
  <div class="page-ct">
    <mt-header title="我的资产">
      <router-link to="/assetIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="asset-ct">
      <div class="asset-cash">
        <div class="asset-cash-head">
          <div class="cash-img">
            <img src="../assets/images/asset-cash-icon1.png" alt="">
            <div>现金</div>
          </div>
          <div class="cash">32.00</div>
        </div>
        <div class="asset-btn">
          <router-link to="/assetRecharge"><div>充值</div></router-link>
          <router-link to="/assetWithdraw"><div>提现</div></router-link>
        </div>
      </div>
      <div class="asset-beike">
        <div class="asset-cash-head">
          <div class="cash-img">
            <img src="../assets/images/asset-cash-icon2.png" alt="">
            <div>贝壳</div>
          </div>
          <div class="asset-detail">
            <div class="asset-detail-list"><span>1.00</span><div>当前售价</div></div>
            <div class="asset-detail-list"><span>20</span><div>当前数量</div></div>
            <div class="asset-detail-list"><span>20.00</span><div>资产价值</div></div>
            <div class="asset-detail-list about-beike"><router-link to="/beikeAbout"><div>关于贝壳</div></router-link></div>
          </div>
        </div>
        <div class="asset-btn">
          <router-link to="/beikeBuy"><div>购买</div></router-link>
          <router-link to="/beikeUse"><div>赎回</div></router-link>
        </div>
      </div>
      <div class="asset-bike">
        <div class="asset-cash-head">
          <div class="cash-img">
            <img src="../assets/images/asset-cash-icon3.png" alt="">
            <div>单车</div>
          </div>
          <div class="asset-detail">
            <div class="asset-detail-list"><span>1.00</span><div>当前售价</div></div>
            <div class="asset-detail-list"><span>20</span><div>当前数量</div></div>
            <div class="asset-detail-list"><span>20.00</span><div>资产价值</div></div>
            <div class="asset-detail-list about-beike"><router-link to="/aboutBike"><div>关于单车</div></router-link></div>
          </div>
        </div>
        <div class="asset-btn">
          <router-link to="/bikeBuy"><div>购买</div></router-link>
          <router-link to="/myBike"><div>赎回</div></router-link>
        </div>
      </div>
      <div class="asset-paper-sale">
        <div class="asset-cash-head">
          <div class="cash-img">
            <img src="../assets/images/asset-cash-icon4.png" alt="">
            <div>售纸机</div>
          </div>
          <div class="asset-detail">
            <div class="asset-detail-list"><span>1.00</span><div>当前售价</div></div>
            <div class="asset-detail-list"><span>20</span><div>当前数量</div></div>
            <div class="asset-detail-list"><span>20.00</span><div>资产价值</div></div>
            <div class="asset-detail-list about-beike"><router-link to="/aboutPaper"><div>关于售纸机</div></router-link></div>
          </div>
        </div>
        <div class="asset-btn">
          <router-link to="/paperBuy"><div>购买</div></router-link>
          <router-link to="/myPaper"><div>赎回</div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'assetAccount',
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
$basebgColor:#f3f3f3;
.page-ct{
  background: $basebgColor;
}
.asset-ct>div{
    background: #fff;
    margin-bottom:.1rem;
    overflow: hidden;
    padding-bottom: .2rem;
}
.asset-cash-head{
  overflow: hidden;
  >div{
    float: left;
    font-size:0.96rem;
  }
  .cash{
    margin-left:0.5rem;
    text-align: left;
    line-height:2.4rem;
    font-weight: bold;
  }
}
.cash-img{
  width:30%;
  text-align:right;
  margin-right:1rem;
  img{
    width: 0.96rem;
    height:auto;
    margin:0.32rem 0 0;
  }
  div{
    font-size: 0.36rem;
    color:#333;
  }
}
.asset-btn{
  div{
    float: left;
    width:34%;
    margin:0 8%;
    height: 0.88rem;
    font-size: 0.36rem;
    color:$baseColor;
    border:1px solid $baseColor;
    border-radius: 0.1rem;
    box-sizing: border-box;
    text-align: center;
    line-height:0.88rem;
  }
}
.asset-beike img{
  margin:0.57rem 0 0.1rem;
}
.asset-bike img{
  margin:0.39rem 0 0.1rem;
}
.asset-paper-sale img{
  width:0.6rem;
  margin-right:0.2rem;
}
.asset-detail{
  width:3.74rem;
  height:2.2rem;
  margin:0.2rem 0;
}
.asset-detail-list{
  width:50%;
  float: left;
  height:1.1rem;
  overflow: hidden;
  font-size: 0.38rem;
  color:#f40;
  box-sizing: border-box;
  text-align: center;
  padding:0.1rem 0;
  div{
    font-size: 0.24rem;
    margin-top:0.05rem;
    color:#666;
  }
}
.asset-detail-list:nth-of-type(1){
  border-right:1px solid #eee;
  border-bottom:1px solid #eee;
}
.asset-detail-list:nth-of-type(2){
  border-bottom:1px solid #eee;
}
.asset-detail-list:nth-of-type(3){
  border-right:1px solid #eee;
}
.about-beike div{
  margin-top:0;
  line-height:1.2rem;
  text-decoration:underline;
}
</style>
