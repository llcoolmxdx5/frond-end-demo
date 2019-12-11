<template>
  <div class="index-page">
    <div class="banner">
      <div class="location-search" style="background: rgba(255, 255, 255, 0);">
        <span class="current-city">
          <span class="one-line">成都</span>
          <i></i>
        </span>
        <span class="search">搜索顶呱呱产品</span>
      </div>
    </div>
    <div class="onlien-query-wrap"></div>
    <div class="kind-wrap"></div>
    <div class="index-hot"></div>
    <div class="active-wrap"></div>
    <div class="recm-product-wrap"></div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.index-page {
  background-color: #f0f2f5;
}
.banner {
  position: relative;
  width: 100%;
  height: 3.68rem;
  overflow: hidden;
  .location-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    padding: 0.16rem 0.32rem;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    box-sizing: border-box;
  }

  .location-search.active {
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.1);
  }

  .location-search.active .current-city,
  .location-search.active .search {
    border: none;
    background: hsla(0, 0%, 52.9%, 0.1);
  }

  .location-search .current-city {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.48rem;
    height: 0.6rem;
    background: hsla(0, 0%, 52.9%, 0.1);
    border-radius: 0.3rem;
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #10bbb8;
    margin-right: 0.16rem;
    padding: 0 0.1rem;
    border: 0.02rem solid hsla(0, 0%, 52.9%, 0.2);
  }

  .location-search .current-city > i {
    display: inline-block;
    width: 0;
    height: 0;
    border-color: #10bbb8 transparent transparent;
    border-style: solid;
    border-width: 0.08rem 0.08rem 0;
    vertical-align: middle;
    margin-left: 0.16rem;
  }

  .location-search .search {
    flex: 1;
    display: flex;
    align-items: center;
    height: 0.6rem;
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #b7b7b7;
    padding-left: 0.32rem;
    background: hsla(0, 0%, 52.9%, 0.1);
    border-radius: 0.3rem;
    border: 0.02rem solid hsla(0, 0%, 52.9%, 0.2);
  }
}
.onlien-query-wrap {
  width: 100%;
  height: 1.86rem;
  background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/index/home_tel_bg.png)
    no-repeat;
  background-size: 100% 100%;
  margin-top: 0.16rem;
  display: flex;
  padding: 0.32rem 0;
  > a {
    display: block;
    width: 50%;
    height: 100%;
    line-height: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:first-child {
      border-right: 0.02rem solid #d7d8d9;
    }
    img {
      width: 0.44rem;
      height: 0.44rem;
      position: relative;
      top: -0.08rem;
    }
    strong {
      display: block;
      font-size: 0.28rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #252525;
      line-height: 1;
      margin-top: 0.15rem;
    }
    p {
      font-size: 0.24rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #878787;
      line-height: 1;
      margin-top: 0.12rem;
    }
  }
}
</style>
