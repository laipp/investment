<template>
  <div class="page-ct">
    <mt-header title="关于我们">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="logo"><img src="../assets/images/logo.png" alt=""></div>
    <div class="intro">
      刘强东与记者的交流中还提到了自己的“创业天赋”，他认为这是一种家族遗传，自己最早的创业启蒙应是从父辈、祖辈听到的创业故事。他认为其中最有价值的东西，便是分享财富。而成功的秘诀无他——应该保持不断且积极的学习，努力工作。
    </div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'aboutUs',
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
body{
  background: #fff;
}
.logo{
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding:0.7rem 0;
  img{
    width:2.38rem;
    height:2.38rem;
  }
}
.intro{
  padding:0 0.45rem 0 0.35rem;
  font-size: 0.28rem;
  line-height:0.46rem;
  text-indent: 2em;
  color:#444;
}
</style>
