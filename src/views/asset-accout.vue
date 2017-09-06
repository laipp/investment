<template>
  <div class="page-ct">
    <mt-header title="我的资产">
      <router-link to="/assetIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    我的资产
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'contactUs',
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
  background: #328072;
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
}
.page-content-list{
  height: 0.88rem;
  line-height:0.88rem;
  font-size: 0.32rem;
  color:$baseColor;
  background: #eee;
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
</style>
