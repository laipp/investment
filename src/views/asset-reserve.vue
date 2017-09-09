<template>
  <div class="page-ct">
    <mt-header title="账户预留">
      <router-link to="/assetIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="reserve-ct">
      <div class="reserve-title">
        <span><img src="../assets/images/asset-reserve-icon1.png" alt=""></span>银行卡
      </div>
      <div class="input-list">
        <mt-field label="银行卡" placeholder="请输入需要绑定的银行卡号" v-model="creditCard"></mt-field>
        <mt-field label="账户姓名" placeholder="请输入您的姓名" v-model="userName"></mt-field>
        <mt-field label="开户行" placeholder="请选择开户行" v-model="bankName"></mt-field>
      </div>      
      <div class="reserve-title">
        <span><img src="../assets/images/asset-reserve-icon2.png" alt=""></span>支付宝
      </div>
      <div class="input-list">
        <mt-field label="支付宝账号" placeholder="请输入您的支付宝账户" v-model="zhifubaoAccount"></mt-field>
        <mt-field label="账户名" placeholder="请输入您的姓名" v-model="accountName"></mt-field>
      </div>
    </div>
    <div class="reserve-btn">确认</div>
    <div class="reserve-tips">预留账户用于用户提现时转账使用</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'contactUs',
  data () {
    return {
      creditCard:'',
      userName:'',
      bankName:'',
      zhifubaoAccount:'',
      accountName:''
    }
  },
  components:{
    // headerItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$baseColor:#06816c;
.page-ct{
  background: #e6e6e6;
}
.reserve-title{
  font-size: 0.36rem;
  color:#333;
  padding:0.2rem 0.5rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: left;
  justify-content: left;
  span{
    float: left;
    width: 0.44rem;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-right:0.2rem;
    img{
      width: 0.44rem;
      height:0.44rem;
    }
  }
}
.input-list{
  background: #fff;
  .mint-field .mint-cell-title{
    width:1.7rem;
    padding-left:0.3rem;
  }
  .mint-cell-text{
    color:$baseColor;
  }
}
.reserve-btn{
    height: 0.88rem;
    line-height:0.88rem;
    margin:1.2rem 0.49rem 0;
    background: $baseColor;
    color:#fff;
    font-size: 0.34rem;
    text-align: center;
    border-radius: 0.1rem;
}
.reserve-tips{
  margin-top:0.28rem;
  font-size: 0.24rem;
  color:#7a95b7;
  text-align: center;
}

input::-webkit-input-placeholder {
	color: #ccc;
}
input:-ms-input-placeholder { // IE10+
	color: #ccc;
}
input:-moz-placeholder { // Firefox4-18
	color: #ccc;
}
input::-moz-placeholder { // Firefox19+
	color: #ccc;
}
</style>
