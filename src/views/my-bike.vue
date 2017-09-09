<template>
  <div class="page-ct">
    <mt-header title="我的单车">
      <router-link to="/assetAccout" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">昨日收益</mt-tab-item>
      <mt-tab-item id="2">七日收益</mt-tab-item>
      <mt-tab-item id="3">购买时间</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="anouncement">单车赎回功能即将开启，敬请期待！</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="anouncement">单车赎回功能即将开启，敬请期待！</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="anouncement">单车赎回功能即将开启，敬请期待！</div>
      </mt-tab-container-item>
    </mt-tab-container>

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
  background: #e6e6e6;
}
.mint-navbar{
  height: 0.88rem;
  background: #fff;
}
.mint-navbar .mint-tab-item{
  padding:0.14rem 0;
}
.mint-tab-item-label{
  line-height: 0.6rem;
  font-size: 0.36rem;
  color:#b8b8b8;
}
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 2px solid $baseColor;
}
.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
  color: $baseColor;
}
.anouncement{
  position: fixed;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 0.28rem;
  color:rgba(102,102,102,1.0)
} 
</style>
