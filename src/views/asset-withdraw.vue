<template>
  <div class="page-ct">
    <mt-header title="余额提现">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="withdraw">
      <div class="withdraw-head">
        <div>12.32</div>
        <div class="withdraw-title">我的余额（元）</div>
      </div>
      <div class="withdraw-bd">
          <div class="withdraw-title">提现金额</div>
          <div>¥ 0.00</div>
      </div>
      <div class="withdraw-btn" @click="alertFunc">立即提现</div>
      <div class="withdraw-tips">
          <p>提现金额将于24小时内到达指定账户</p>
          <p>一天只能提现一次，单次提现金额不能低于100元！</p>
      </div>
    </div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'assetWithdraw',
  data () {
    return {
    }
  },
  components:{
    // headerItem
  },
  methods:{
    alertFunc(){
      let _this = this;
      _this.$messagebox({
        title: '提示',
        message: '提现请求已受理！为能正常提现，请确保您预留的收款账户正确有效。如有疑问请联系客服',
        showCancelButton: true,
        showCancelButton:false
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$baseColor:#06816c;
.withdraw-head{
  width:100%;
  height: 2.8rem;
  background:$baseColor;
  text-align: center;
  overflow: hidden;
  color:#fff;
  div{
    display:block;
    margin:0.6rem auto 0.2rem;
    font-size: 1.12rem;
    line-height: 1.12rem;
  }
  .withdraw-title{
    font-size: 0.3rem;
    line-height: 0.3rem;
    margin: 0;
  }
}
.withdraw-bd{
  margin-top:0.1rem;
  padding:0.26rem 0.49rem;
  border-bottom: 1px solid #ddd;
  background: #fff;
  div{
    font-size:0.48rem;
    color:#ff6464;
  }
  .withdraw-title{
    margin-bottom:0.4rem;
    font-size: 0.36rem;
    color:#999;
  }
}
.withdraw-btn{
  margin:2.32rem 0.45rem 0.2rem;
  background: $baseColor;
  color:#fff;
  font-size: 0.36rem;
  height:0.88rem;
  line-height:0.88rem;
  text-align: center;
  border-radius: 0.1rem;
}
.withdraw-tips{
  color:#7a95b7;
  p{
    font-size: 0.24rem;
    text-align:center;
  }
}

</style>
