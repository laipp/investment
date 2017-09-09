<template>
  <div class="page-ct">
    <mt-header title="联系我们">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="intro">
      
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
