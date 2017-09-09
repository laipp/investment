<template>
  <div class="page-ct">
    <mt-header title="单车特权">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goBackFunc"></mt-button>
      </router-link>
    </mt-header>
    <div class="bike-ct">
      <div class="banner"><img src="../assets/images/bike-bg.png" alt=""></div>
      <div class="adv-list">
        <img src="../assets/images/bike-bg1.png" alt="">
        <div>
          <h1>享受3年免费骑行</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>      
      <div class="adv-list adv-list-right">
        <img src="../assets/images/bike-bg2.png" alt="">
        <div>
          <h1>享受3年车主收益</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>      
      <div class="adv-list">
        <img src="../assets/images/bike-bg3.png" alt="">
        <div>
          <h1>随时赎回单车</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>      
      <div class="adv-list adv-list-right">
        <img src="../assets/images/bike-bg4.png" alt="">
        <div>
          <h1>推荐有奖</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>      
      <div class="adv-list">
        <img src="../assets/images/bike-bg5.png" alt="">
        <div>
          <h1>指定用户免费骑行</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>      
      <div class="adv-list adv-list-right">
        <img src="../assets/images/bike-bg6.png" alt="">
        <div>
          <h1>免费推广广告</h1>
          <p>享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行享受3年免费骑行</p>
        </div>
      </div>
      <div class="bike-tips">更多车主权益敬请期待</div>
    </div>
    <div class="fix-bottom-btns">
      <div>¥ 598</div>
      <button @click="popupVisible = !popupVisible">麻溜做车主</button>
    </div>
    <!-- 弹框 -->
    <mt-popup
      v-model="popupVisible">
      <img @click="popupVisible = !popupVisible" class="close-btn" src="../assets/images/close-btn.png" alt="">
      <div class="details">
        <p>1.同一用户可成为多辆车的车主；</p>
        <p>2.成为车主期间可享受任意单车免费骑行；</p>
        <p>3.车主可享受单车租金，广告，流量等收益；</p>
        <p>4.车主收益将在成为车主后的次日开始享受；</p>
        <p>5.推荐新人成为车主，奖励丰厚。</p>
      </div>
      <div class="price">598.00</div>
      <div class="size">
        <div @click="decreaceHandle" :class="{diabled_btn:count==1}">-</div>
        <input type="text" class="size-count" v-model="count">
        <div @click="increaceHandle">+</div>
      </div>
      <div class="tips">确认支付，即表示已阅读并同意<i>《车主委托协议》</i></div>
      <input type="text" class="invite-code" placeholder="请输入邀请码" >
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
      popupVisible:false,
      count:1,
    }
  },
  methods:{ 
    decreaceHandle(){
      this.count--;
      if(this.count<1){this.count=1}
    },
    increaceHandle(){
      this.count++;
    },
    goBackFunc(){
      history.go(-1)
    } 
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$baseColor:#06816c;
.page-ct{
  background: #fff;
  padding-bottom:0.8rem;
}
.bike-ct{
  .banner{
    width:100%;
    height: 3.6rem;
    img{
      width:100%;
      height:100%;
    }
  }
  .adv-list{
    padding:0.5rem 0.5rem 0;
    overflow: hidden;
    img{
      float:left;
      width:1.82rem;
      height:auto;
    }
    div{
      float:right;
      width:calc(100% - 2.2rem);
      color:#454545;
      h1{
        font-size: 0.28rem;
        line-height:0.5rem;
        font-weight: normal;
      }
      p{
        font-size: 0.24rem;
        color:#888;
        text-align: left;
      }
    }

  }
  .adv-list-right{
    img{
      float: right;
    }
    div{
      float: left;
      text-align: right;
      p{
        text-align: right;
      }
    }
  }
}
.bike-tips{
  text-align: center;
  font-size: 0.24rem;
  color:#999;
  margin:1.2rem auto 1rem;
}
.fix-bottom-btns{
  width:100%;
  position: fixed;
  left:0;
  bottom:0;
  background: #e5e5e5;
  div{
    float: left;
    line-height: 1.2rem;
    margin-left:0.6rem;
    font-size: 0.4rem;
    color: #bf3c30;
  }
  button{
    float: right;
    width:3rem;
    margin:0.16rem 0.7rem;
    background: #387f6d;
    height: 0.88rem;
    line-height:0.88rem;
    font-size: 0.36rem;
    text-align: center;
    border-radius: 0.1rem;
    color:#fff;
    border:0 none;
  }
}
.details{
  margin:0.4rem auto 0.3rem;
  p{
    padding:0 0.2rem;
    line-height:0.38rem;
    font-size: 0.24rem;
    color:#666;
    text-align: left;
  }
}
.price{
  font-size: 0.72rem;
  color:#db3e3f;
  margin-bottom:0.3rem;
  text-align: center;
}
.size{
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  div{
    display: inline-block;
    width:0.56rem;
    height: 0.56rem;
    line-height:0.5rem;
    background:$baseColor;
    color:#fff;
    border:0 none;
    border-radius: 0.1rem;
    font-size: 0.5rem;
  }
  .diabled_btn{
    background: #ccc;
    cursor: not-allowed;
  }
  input{
    display: inline-block;
    width:1rem;
    height: 0.56rem;
    margin:0 0.3rem;
    text-align: center;
    font-size: 0.28rem;
    border:1px solid $baseColor;
  }
}
.tips{
  font-size: 0.24rem;
  color:#ccc;
  text-align: center;
  margin:0.2rem auto 0.4rem;
  i{
    font-style: normal;
    color:#7a95b7;
  }
}
.invite-code{
    display: block;
    margin:0 auto;
    width:1.76rem;
    height: 0.56rem;
    text-align: center;
    line-height:0.56rem;
    color:#666;
    border:1px solid $baseColor;
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
