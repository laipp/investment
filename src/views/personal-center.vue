<template>
  <div class="page-ct">
    <mt-header title="个人中心">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="portrait">
      <img src="../assets/images/personal-center-portrait.png" alt="">
    </div>
    <div class="page-select">
      <div>我的单车 <i>0</i></div>
      <div class="divide-line"></div>
      <div>我的售纸机 <i>0</i></div>
    </div>
    <div class="page-content">
      <div class="page-content-list">
        <div><img src="../assets/images/personal-center-icon1.png" alt=""></div>
        资产管理
        <router-link to="/assetIndex" slot="left"><i></i></router-link>
        <span>0.00元</span>
      </div>      
      <div class="page-content-list">
        <div><img src="../assets/images/personal-center-icon2.png" alt=""></div>
        贝壳投资
        <router-link to="/beikeIndex" slot="left"><i></i></router-link>
      </div>      
      <div class="page-content-list">
        <div><img src="../assets/images/personal-center-icon3.png" alt=""></div>
        关于我们
        <router-link to="/aboutUs" slot="left"><i></i></router-link>
      </div>      
      <div class="page-content-list">
        <div><img src="../assets/images/personal-center-icon4.png" alt=""></div>
        联系我们
        <router-link to="/contactUs" slot="left"><i></i></router-link>
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
.portrait{
  height: 1.8rem;
  background: $baseColor;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  img {
    width: 1.2rem;
    height: 1.2rem;
    background: #ccc;
    border-radius: 50%;
  }
}
.page-select{
  position: relative;
  background: #25907e;
  width: 100%;
  overflow: hidden;
  div{
    float: left;
    width: 50%;
    height:0.88rem;
    line-height: 0.88rem;
    font-size: 0.36rem;
    text-align: center;
    color:#fff;
    i{
      font-style: normal;
    }
  }
  .divide-line{
    position: absolute;
    left: 50%;
    top: 0.14rem;
    width: 0.02rem;
    height:0.6rem;
    background: #fff;
  }
}
.page-content-list{
  height: 0.88rem;
  line-height:0.88rem;
  font-size: 0.32rem;
  color:$baseColor;
  background: #fff;
  border-bottom:1px solid #eee;
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
</style>
