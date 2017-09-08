<template>
  <div class="page-ct">
    <mt-header title="购买贝壳">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="recharge-head">
      <div class="recharge-title">购买贝壳</div>
      <div class="recharge-detil">1个贝壳=1.00元</div>
    </div>
    <div class="recharge-body">
      <div class="recharge-title">购买数量 <i>(骑行费用：30分钟／1贝壳)</i></div>
      <div class="recharge-btns">
        <div v-for="(item,$index) in charge" @click="selectHandle(item,$index)" :class="{'active':btnCur == $index}">
            <span>{{item}}</span>
            <img src="../assets/images/asset-cash-icon2.png" alt="">
            <i>X150</i>
        </div>
        <div class="about-beike"><router-link to="/beikeAbout"><span>关于贝壳</span></router-link></div>
      </div>
    </div>
    <div class="recharge-tips">贝壳除了可支付骑行费用外，<br/>还可到“贝壳共享”公众号兑换各种商品和服务</div>
    <div class="fixed-bottom-btns">
        <router-link to="/assetAccout">
          <div>余额支付</div>
      </router-link>        
      <router-link to="/assetAccout">
          <div>微信支付</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactUs',
  data () {
    return {
      btnCur:'',
      charge:['¥ 100','¥ 500','¥ 20','¥ 10','¥5']
    }
  },
  methods:{
    selectHandle(item,index){
        this.btnCur = index;
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
.recharge-head{
  width:100%;
  height:3.6rem;
  padding-left:0.46rem;
  background:url('../assets/images/asset-recharge-bg.png') no-repeat right 0.46rem bottom 0.3rem;
  background-size: 60% auto;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom:1px solid #ccc;
  .recharge-title{
    font-size: 0.4rem;
    color:#333;
    margin:1.17rem 0 0.97rem;
  }
  .recharge-detil{
    margin-bottom:0.85rem;
    font-size: 0.24rem;
    color:#999;
  }
}
.recharge-body{
  padding:0 0.46rem;
  .recharge-title{
    font-size: 0.32rem;
    color:#333;
    margin:0.3rem 0;    
    i{
      font-style: normal;
      color:#999;
      font-size: 0.24rem;
    }
  }
  .recharge-btns{
    overflow: hidden;
    div{
      float: left;
      padding-left:0.4rem;
      width:48%;
      height:0.88rem;
      line-height:0.88rem;
      font-size: 0.36rem;
      border-radius: 0.1rem;
      margin-bottom:0.2rem;
      background: #e6e6e6;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      box-sizing: border-box;
      span{
        width:1.4rem;
      }
      img{
        width:0.34rem;
        height:0.17rem;
      }
      i{
        margin-left:0.1rem;
        font-style: normal;
        font-size:0.24rem;
      }
    }
    div:nth-of-type(2n+1){
      margin-right:4%;
    }
    div.active{
      color:#fff;
      background:$baseColor;
    }
  }
}
.recharge-way{
  width:100%;
  margin:0.9rem 0 0.47rem;
  padding:0 0.49rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  color:#666;
  font-size: 0.3rem;
  text-align: left;
  img{
    width:0.38rem;    
    margin-right:0.22rem;
    height:auto;
  }
}
.recharge-btn{
    height: 0.88rem;
    line-height:0.88rem;
    margin:0 0.49rem;
    background: $baseColor;
    color:#fff;
    font-size: 0.34rem;
    text-align: center;
    border-radius: 0.1rem;
}
.recharge-tips{
  position: fixed;
  left: 0;
  bottom:1.6rem;
  width:100%;
  text-align: center;
  font-size: 0.24rem;
  color:#7a95b7;
  text-align: center;
}
.fixed-bottom-btns{
  position: fixed;
  bottom:0;
  left:0;
  width:100%;
  overflow: hidden;
  background: $baseColor;
  div{
    width:50%;
    float:left;
    text-align: center;
    font-size: 0.36rem;
    padding:0.27rem 0;
    color:#fff;
    box-sizing: border-box;
  }
  div:nth-of-type(1){
    border-right:1px solid #fff;
  }
}
.recharge-body .recharge-btns .about-beike{
  border:1px solid $baseColor;
  background: #fff;
  text-align: center;
  padding: 0;
  a{
    width:100%;
    text-align: center;
    color:$baseColor;
    text-decoration: none;
  }
  span{
    width:100%;
    margin:0 auto;
  }
}
</style>
