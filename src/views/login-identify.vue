<template>
  <div class="page-ct">
    <mt-header title="实名认证">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="login-banner">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="reserve-ct">
      <div class="input-list">
        <mt-field label="姓名" placeholder="请输入真实姓名" v-model="realName"></mt-field>
        <mt-field label="身份证号" v-model="idCard" placeholder="请输入您的有效证件"></mt-field>
      </div>      
    </div>
    <div class="login-btn">认证</div>
    <div class="login-tip">无中华人民共和国居民身份证，请使用护照进行认证</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'contactUs',
  data () {
    return {
      realName:'',
      idCard:''
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
.input-list{
  background: #fff;
  .mint-field .mint-cell-title{
    width:1.7rem;
    padding-left:0.3rem;
  }
  .mint-cell-text{
    color:#333;
  }
}
.login-banner{
  background: #fff;
  text-align: center;
  padding:0.4rem 0 0.2rem;
  margin-bottom:0.2rem;
  img{
    width: 2rem;
    height:auto;
  }
}
.login-btn{
    height: 0.88rem;
    line-height:0.88rem;
    margin:1.2rem 0.49rem 0;
    background: $baseColor;
    color:#fff;
    font-size: 0.34rem;
    text-align: center;
    border-radius: 0.1rem;
}
.get-captcha{
  position: absolute;
  width: 1.8rem;
  height:1rem;
  line-height:1rem;
  right: 0;
  top: -0.5rem;
  padding-left:0.4rem;
  color:#ccc;
  border-left:1px solid #eee;
}
.login-tip{
    margin-top:0.2rem;
    text-align: center;
    font-size:0.24rem;
    color: #7a95b7;
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
