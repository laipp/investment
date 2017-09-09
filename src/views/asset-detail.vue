<template>
  <div class="page-ct">
    <mt-header title="收支明细">
      <router-link to="/assetIndex" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="asset-detail">
      <div class="time-select" @click="openPicker">
        <img class="time" src="../assets/images/asset-detail-time.png" alt="">
        选择时间
        <img  class="arrow-btn" src="../assets/images/asset-detail-arrdown1.png" alt="">
      </div>
      <div class="detail-tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">收入</mt-tab-item>
          <mt-tab-item id="2">支出</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="list-item">
              <div class="list-item-l">
                <h1>租金收益</h1>
                <p>2017-06-09 08:16:40</p>
              </div>
              <div class="list-item-r">20元</div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="list-item">
              <div class="list-item-l">
                <h1>骑行消费</h1>
                <p>2017-07-09 08:16:40</p>
              </div>
              <div class="list-item-r">12元</div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <mt-datetime-picker
      ref="picker"
      v-model="pickerVisible"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
      >
    </mt-datetime-picker>
    <div class="no-more">没有更多了</div>
  </div>
</template>

<script>
// import headerItem from '@/components/header';
export default {
  name: 'assetDetail',
  data () {
    return {
      pickerVisible:'',
      selected:'1',
      time:''
    }
  },
  methods:{
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(value){
        this.time = this.formatDate(value)       
      },
      formatDate (strTime) {
          var date = new Date(strTime);
          return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$baseColor:#06816c;
.page-ct{
  background: #e6e6e6;
}
.time-select{
  height:1rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 0.28rem;
  color:#333;
  background: #fff;
  img.time{
    margin-right:0.2rem;
    width:0.42rem;
    height: auto;
  }  
  img.arrow-btn{
    margin-left:0.1rem;
    width:0.34rem;
    height: auto;
  }
}
.mint-navbar{
  padding:0 10%;
  .mint-tab-item{
    margin:0 0.5rem;
    .mint-tab-item-label{
      font-size: 0.36rem;
      color:#a3a3a3;
    }
  }
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid $baseColor;
    color: $baseColor;
    margin-bottom: 0;
    .mint-tab-item-label{
      color: $baseColor;
    }
}
.list-item{
  border-top:1px solid #eee;
  padding:0.3rem 0.4rem;
  background: #fff;
  overflow: hidden;
  .list-item-l{
    float:left;
    h1{
      font-size: 0.28rem;
      font-weight: normal;
      color:#333;
    }
    p{
      font-size: 0.2rem;
      color:#c4c4c4;
    }
  }  
  .list-item-r{
    float:right;
    line-height:0.75rem;
    font-size: 0.36rem;
    color:$baseColor;
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
.mint-datetime{
  width:100%;
  .mint-datetime-action{
    color:$baseColor;
  }
  .mint-datetime-cancel{
    color:#b8b8b8;
    border-right:1px solid #eee;
    box-sizing: border-box;
  }
}
</style>
