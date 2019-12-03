<template>
  <div>
    <a id="download-header" href="/app?channel=mymovie1yuan-dy" v-if="$store.state.showDownload">
      <div class="download-app-bar">
        <img
          class="logo"
          src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"
          width="42"
          height="42"
        />
        <div class="app-name-desc">
          <div class="app-name">猫眼</div>
          <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
        </div>
        <div class="btn-open-app">立即打开</div>
      </div>
    </a>
    <a
      href="/app?channel=mymovie1yuan-dy"
      id="download-tip"
      class="download-tip"
      v-else
    ></a>
  </div>
</template>
<script>
export default {
  name: "DownloadApp"
};
</script>
<style lang="scss" scoped>
.download-app-bar {
  position: relative;
  height: 63px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  .logo {
    position: absolute;
    left: 15px;
    top: 11px;
    width: 44px;
    height: 44px;
  }
  .app-name-desc {
    position: absolute;
    left: 66px;
    top: 13px;
    .app-name {
      font-size: 17px;
      color: #222;
      line-height: 23px;
    }
    .app-desc {
      font-size: 12px;
      color: #999;
    }
  }
  .btn-open-app {
    position: absolute;
    right: 15px;
    top: 17px;
    width: 68px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ef4238;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
  }
}
.download-tip {
  display: block;
  position: fixed;
  right: 16px;
  bottom: 100px;
  width: 64px;
  height: 90px;
  background: url("../assets/img/open_app.png") no-repeat;
  background-size: contain;
  z-index: 10;
}
</style>
