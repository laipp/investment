<template>
  <div class="page-ct">
    <mt-header title="余额充值">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="recharge-head">
      <div class="recharge-title">账户充值</div>
      <div class="recharge-detil">我的余额：12.3元</div>
    </div>
    <div class="recharge-body">
      <div class="recharge-title">充值金额</div>
      <div class="recharge-btns">
        <div v-for="(item,$index) in charge" @click="selectHandle(item,$index)" :class="{'active':btnCur == $index}">{{item}}</div>
      </div>
    </div>
    <div class="recharge-way">
        <img src="../assets/images/asset-rechage-icon1.png" alt="">
        微信支付
    </div>
    <div class="recharge-btn">充值</div>
    <div class="recharge-tips">用户账户余额可随时提现</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'contactUs',
  data () {
    return {
      btnCur:'',
      charge:['¥ 200','¥ 100','¥ 50','¥ 30','¥ 20','¥ 10']
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
.page-ct{
  background: #fff;
}
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
  }
  .recharge-btns{
    overflow: hidden;
    div{
      float: left;
      width:48%;
      height:0.88rem;
      line-height:0.88rem;
      font-size: 0.36rem;
      border-radius: 0.1rem;
      margin-bottom:0.2rem;
      background: #e6e6e6;
      text-align: center;
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
  margin-top:0.28rem;
  font-size: 0.24rem;
  color:#666;
  text-align: center;
}
</style>
