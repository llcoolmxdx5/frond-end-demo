<template>
  <div class="index-page">
    <div class="banner">
      <div class="location-search" style="background: rgba(255, 255, 255, 0);">
        <span class="current-city">
          <span class="one-line">成都</span>
          <i></i>
        </span>
        <router-link to="/search" tag="span" class="search">搜索顶呱呱产品</router-link>
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
    &.active {
      box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.1);
      .current-city,
      .search {
        border: none;
        background: hsla(0, 0%, 52.9%, 0.1);
      }
    }
    .current-city {
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
      > i {
        display: inline-block;
        width: 0;
        height: 0;
        border-color: #10bbb8 transparent transparent;
        border-style: solid;
        border-width: 0.08rem 0.08rem 0;
        vertical-align: middle;
        margin-left: 0.16rem;
      }
    }
    .search {
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
.kind-wrap {
  width: 100%;
  background: #fff;
  margin-top: 0.16rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.32rem 0.48rem;
  > a {
    display: block;
    width: 20%;
    height: 50%;
    text-align: center;
    font-size: 0.26rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #878787;
    line-height: 1;
    margin-top: 0.4rem;
    &:first-child,
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      margin-top: 0.48rem;
    }
    img {
      width: 0.52rem;
      height: 0.48rem;
    }
    p {
      margin-top: 0.24rem;
    }
  }
}
.index-hot {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.88rem;
  background: #fff;
  overflow: hidden;
  padding: 0 0.32rem;
  margin-top: 0.16rem;
  img {
    width: 1.7rem;
    height: 0.26rem;
    margin-top: 0.02rem;
  }
  .index-hot-swiper {
    flex: 1;
    overflow: hidden;
    margin: 0 0.2rem;
  }
  .index-hot-text {
    width: 100%;
    height: 0.88rem;
    justify-content: left;
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #878787;
    padding-top: 0.02rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0.88rem;
  }
}
.home-title {
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #252525;
  line-height: 1;
  margin-top: 0.4rem;
  margin-bottom: 0.32rem;
  .go-more {
    font-size: 0.24rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #878787;
    float: right;
  }
}
.active-wrap {
  height: 5.58rem;
  background: #fff;
  margin-top: 0.16rem;
  overflow: hidden;
  padding: 0 0.32rem;
  .active-contont {
    width: 100%;
    height: 4.16rem;
    position: relative;
    h2 {
      font-size: 0.34rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #fff;
      line-height: 0.34rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 0.24rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #fff;
      line-height: 0.32rem;
      margin-top: 0.2rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    > a:first-child {
      position: absolute;
      width: 43%;
      height: 4.16rem;
      background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/index/home_yu1.png)
        no-repeat;
      background-size: 100% 100%;
      border-radius: 0.08rem;
      left: 0;
      top: 0;
      padding: 0.48rem 0.24rem;
      box-sizing: border-box;
      p {
        -webkit-line-clamp: 8;
      }
    }
    > a:nth-child(2) {
      position: absolute;
      width: 54%;
      height: 1.8rem;
      background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/index/home_yu2.png)
        no-repeat;
      background-size: 100% 100%;
      right: 0;
      top: 0;
      border-radius: 0.08rem;
      padding: 0.44rem 0.28rem;
      box-sizing: border-box;
      p {
        -webkit-line-clamp: 3;
      }
    }
    > a:nth-child(3) {
      position: absolute;
      width: 26.3%;
      height: 2.2rem;
      background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/index/home_yu3.png)
        no-repeat;
      background-size: 100% 100%;
      border-radius: 0.08rem;
      right: 28%;
      top: 1.96rem;
      padding: 0.28rem 0.16rem;
      box-sizing: border-box;
      p {
        -webkit-line-clamp: 3;
      }
    }
    > a:nth-child(4) {
      position: absolute;
      width: 26.3%;
      height: 2.2rem;
      background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/index/home_yu4.png)
        no-repeat;
      background-size: 100% 100%;
      border-radius: 0.08rem;
      right: 0;
      top: 1.96rem;
      padding: 0.28rem 0.16rem;
      box-sizing: border-box;
      p {
        -webkit-line-clamp: 3;
      }
    }
  }
}
.recm-product-wrap {
  padding: 0 0.32rem;
  .dgg-row {
    margin-left: -0.1rem;
    margin-right: -0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
