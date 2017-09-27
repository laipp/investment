<template>
  <div class="page-ct">
    <mt-header title="手机验证">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="login-banner">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="reserve-ct">
      <div class="input-list">
        <mt-field label="手机号码" placeholder="填写手机号" v-model="phone"></mt-field>
        <mt-field label="验证码" v-model="captcha" placeholder="请输入验证吗">
          <div class="get-captcha">获取验证吗</div>
        </mt-field>
      </div>      
    </div>
    <div class="login-btn">开始</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'contactUs',
  data () {
    return {
      phone:'',
      captcha:''
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
  .mint-field{
    border-bottom:1px solid #eee;
  }
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
  color:#999;
  border-left:1px solid #eee;
}


</style>
