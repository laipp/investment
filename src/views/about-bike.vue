<template>
  <div class="page-ct">
    <mt-header title="关于单车">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="about-detail">
        <h1>购买单车和赎回</h1>
        <p>1. 每一个贝壳相当于1元人民币；</p>
        <p>2. 用户可通过购买，兑换或做任务等方式获取贝壳；</p>
        <p>3. 贝壳可在“贝壳共享”旗下的优贝克共享单车等各种共享服务中消费使用，也可以在他人为自己提供共享服务时用作打赏。</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'bikeBuy',
  data () {
    return {
      selected:'1'
    }
  },
  methods:{      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$baseColor:#06816c;
.page-ct{
  background: #f3f3f3;
}
.about-detail{
  margin:0.3rem 0.15rem 0;
  padding:0.9rem 0.42rem 3rem;
  background: #fff;
  overflow: hidden;
  h1{
    margin:0 0 0.58rem;
    text-align: center;
    font-weight: normal;
    font-size: 0.4rem;
    color:#666;
  }
  p{
    font-size: 0.3rem;
    color:#666;
  }
}
</style>
