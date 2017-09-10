<template>
  <div class="page-ct">
    <mt-header title="售纸机认购">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBackFunc"></mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">昨日收益</mt-tab-item>
      <mt-tab-item id="2">七日收益</mt-tab-item>
      <mt-tab-item id="3">安装时间</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="goods-list">
          <div class="goods-img">
            <div><img src="../assets/images/asset-cash-icon4.png" alt=""></div>
            <i>¥998.0</i>
          </div>
          <div class="goods-detail">
            <h1>NO.122434</h1>
            <p>商家：新天地香港城</p>
            <div class="profit">
              <p>昨日收益：2.10</p>
              <p>7日收益：12.10</p>
            </div>
          </div>
          <div class="goods-btn">
            <div class="time">2017年08月13日</div>
            <div class="buy-btn" @click="popupVisible = !popupVisible">认购</div>
          </div>
          <div class="no-more">没有更多了</div>
        </div>
      </mt-tab-container-item>      
      <mt-tab-container-item id="2">
        <div class="goods-list">
          <div class="goods-img">
            <div><img src="../assets/images/asset-cash-icon4.png" alt=""></div>
            <i>¥998.0</i>
          </div>
          <div class="goods-detail">
            <h1>NO.122434</h1>
            <p>商家：新天地香港城</p>
            <div class="profit">
              <p>昨日收益：2.10</p>
              <p>7日收益：12.10</p>
            </div>
          </div>
          <div class="goods-btn">
            <div class="time">2017年08月13日</div>
            <div class="buy-btn" @click="popupVisible = !popupVisible">认购</div>
          </div>
          <div class="no-more">没有更多了</div>
        </div>
      </mt-tab-container-item>      
      <mt-tab-container-item id="3">
        <div class="goods-list">
          <div class="goods-img">
            <div><img src="../assets/images/asset-cash-icon4.png" alt=""></div>
            <i>¥998.0</i>
          </div>
          <div class="goods-detail">
            <h1>NO.122434</h1>
            <p>商家：新天地香港城</p>
            <div class="profit">
              <p>昨日收益：2.10</p>
              <p>7日收益：12.10</p>
            </div>
          </div>
          <div class="goods-btn">
            <div class="time">2017年08月13日</div>
            <div class="buy-btn" @click="popupVisible = !popupVisible">认购</div>
          </div>
          <div class="no-more">没有更多了</div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 弹框 -->
    <mt-popup
      v-model="popupVisible">
      <img @click="popupVisible = !popupVisible" class="close-btn" src="../assets/images/close-btn.png" alt="">
      <h1 class="popup-title">售纸机认购价格</h1>
      <div class="price">¥598.00</div>
      <div class="btns">
        <div>余额支付</div>
        <div>微信支付</div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'bikeBuy',
  data () {
    return {
      selected:'1',
      popupVisible:false
    }
  },
  methods:{   
    goBackFunc(){
      history.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$baseColor:#06816c;
.page-ct{
  background: #e6e6e6;
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
    color:#999;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid $baseColor;
  }
  .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
    color: $baseColor;
  }
}
.goods-list{
  margin-top:0.2rem;
  background: #fff;
  overflow: hidden;
  display: flex;
  padding:0.2rem 0.3rem 0.3rem;
}
.goods-img{
  text-align: center;
  display: inline-block;
  overflow: hidden;
  margin-right:0.2rem;
  div{
    float:left;
    height:1.2rem;
    width: 100%;
  }
  img{
    width:0.46rem;
    height:auto;
  }
  i{
    float:left;
    font-style:normal;
    width: 100%;
    font-size: 0.24rem;
    color:#f9544f;
  }
}
.goods-detail{
  flex:1;
  h1{
    font-size: 0.28rem;
    color:$baseColor;
    margin:0.12rem 0 0.14rem;
  }
  p{
    font-size: 0.22rem;
    color:#999;
  }
  .profit{
    margin-top:0.2rem;
    overflow: hidden;
    p{
      float: left;
    }
    p:nth-of-type(1){
      margin-right:0.2rem;
    }
  }
}
.goods-btn{
  position: absolute;
  right: 0.3rem;
  top:0.4rem;
  .time{
    color:#b8b8b8;
    font-size: 0.22rem;
    margin-bottom: 0.76rem;
  }
  .buy-btn{
    float: right;
    width:0.9rem;
    height:0.5rem;
    text-align: center;
    line-height:0.5rem;
    font-size:0.3em;
    border-radius: 0.1rem;
    background:$baseColor;
    color:#fff;
  }
}
.no-more{
  position: fixed;
  left: 0;
  bottom:1rem;
  width:100%;
  font-size: 0.24rem;
  color:#888;
  text-align:center;
}
.popup-title{
  font-size: 0.36rem;
  color:#666;
  font-weight: normal;
  margin:0.43rem auto 0.66rem;
}
.price{
  font-size: 0.72rem;
  color:#db3e3f;
  margin-bottom:0.3rem;
  text-align: center;
}
.btns{
  width:100%;
  border-top:1px solid #ddd;
  overflow: hidden;
  margin-top:0.4rem;
  div{
    float: left;
    padding:0.3rem 0;
    width:50%;
    color:$baseColor;
    font-size: 0.36rem;
    box-sizing: border-box;
  }
  div:nth-of-type(1){
    border-right:1px solid #ddd;
  }
}
.close-btn{
  position: absolute;
  display: block;
  right: 0.28rem;
  top:0.28rem;
  width: 0.44rem;
  height:0.44rem;
}
</style>
