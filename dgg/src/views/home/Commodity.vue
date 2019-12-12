<template>
  <div class="commodity">
    <div class="img">
      <img v-lazy="item.comDefaultSkuImg" />
    </div>
    <div class="product-info">
      <div class="title-wrap">
        <h2 class="title">{{ item.comName }}</h2>
      </div>
      <div class="num">
        <div class="num-item ellipsis">{{ item.comRemark }}</div>
      </div>
      <div class="price">
        <div class="price_left">
          <div class="ellipsis">
            <span class="dollar-sign">￥</span>
            {{ item.comDefaultSkuPricea | price }}
          </div>
          <div class="ellipsis line-through pre">
            <span class="dollar-sign">￥</span>
            {{ item.comSkuMarketPrice | price }}
          </div>
        </div>
        <div class="num">
          <div class="num-item ellipsis">销量: {{ item.comSalesVolumeSum }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Commodity",
  props: ["item"],
  filters: {
    price(value) {
      value = value.slice(0, -2) + "." + value.slice(-2);
      return value;
    }
  }
};
</script>
<style lang="scss">
.commodity {
  width: 100%;
  background: #fff;
  margin-bottom: 0.2rem;
  padding: 0.32rem 0.32rem 0.26rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  .img {
    width: 1.2rem;
    height: 1.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-info {
    padding-left: 0.24rem;
    flex: 1;
    overflow: hidden;
  }
  .title {
    font-size: 0.28rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    line-height: 0.32rem;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .tag-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin-top: 0.2rem;
    .num-item {
      display: inline-block;
      padding: 0 0.08rem;
      border-radius: 0.04rem;
      font-size: 0.22rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #878787;
      text-align: center;
      border: 0.01rem solid #d7d8d9;
      margin-right: 0.12rem;
    }
  }
  .tag {
    max-width: 0.9rem;
    display: flex;
    margin: 0.2rem 0;
    .tag-item {
      display: block;
      margin-right: 0.08rem;
      font-size: 0.22rem;
      padding: 0.02rem 0.12rem;
      background: #fff2eb;
      border-radius: 0.04rem;
      color: #f60;
    }
  }
  .price {
    font-size: 0.36rem;
    font-weight: 700;
    color: #f60;
    justify-content: space-between;
    margin-top: 0.24rem;
    &,
    .price_left {
      display: flex;
      align-items: center;
    }
    .dollar-sign {
      font-size: 0.24rem;
    }
    .pre {
      font-size: 0.22rem;
      font-family: DIN-Medium, DIN;
      font-weight: 500;
      color: #878787;
      margin-left: 0.05rem;
    }
    .cartBtn {
      width: 0.46rem;
      height: 0.46rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff2eb;
      color: #fff;
      font-size: 0.22rem;
      font-weight: 500;
      position: absolute;
      right: 0.24rem;
      bottom: 0.42rem;
      .icon {
        margin-right: 0.04rem;
      }
    }
    .num {
      margin-top: 0;
    }
  }
  .num {
    font-size: 0.22rem;
    font-weight: 500;
    margin-top: 0.2rem;
    color: #b8b8b8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .num-item {
      flex: 1;
    }
  }
}
</style>
