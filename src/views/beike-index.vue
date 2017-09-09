<template>
  <div class="page-ct">
    <mt-header title="贝壳投资">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="beike-banner">
      <img src="../assets/images/beike-banner.png" alt="">
    </div>
    <div class="beike-banner-sec">
      <img src="../assets/images/beike-banner2.png" alt="">
    </div>
    <div class="beike-item-ct">
      <router-link to="/myPaper" >
        <div class="beike-item">
          <img src="../assets/images/beike-icon1.png" alt="">
          <p>售纸机投资</p>
        </div>     
      </router-link> 
      <router-link to="/aboutBike" > 
        <div class="beike-item">
          <img src="../assets/images/beike-icon2.png" alt="">
          <p>单车投资</p>
        </div>
      </router-link> 
    </div>
    <div class="beike-tips">更多投资产品敬请期待</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'beikeIndex',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$baseColor:#06816c;
.page-ct{
  background: #eee;
}
.beike-banner{
  height: 3.53rem;
  img{
    width: 100%;
    background: #fff;
  }
}
.beike-banner-sec{
  margin-top:0.2rem;
  background: #fff;
  padding:0 1rem;
  img{
    width: 100%;
    height:auto;
  }
}
.beike-item-ct{
  margin-top:0.2rem;
  padding:0 0.3rem;
  .beike-item{
    float:left;
    width:47%;
    margin-right:0.17rem;
    padding:0.3rem 0;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0px 1px 4px 2px #ddd;
    font-size: 0.34rem;
    color:#333;
    text-align: center;
    img{
      width:0.54rem;
      height: auto;
    }
  }  
  a:nth-of-type(2) .beike-item{
    margin-left:0.17rem;
    margin-right:0;
    img{
      width:0.88rem;
      height: auto;
      margin:0.05rem 0;
    }
  }
}
.beike-tips{
  position: fixed;
  left: 0;
  bottom:3rem;
  width: 100%;
  text-align: center;
  color:#b8b8b8;
  font-size: 0.24rem;
}

</style>
