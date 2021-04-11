<template>
  <div>
    <div class="headboxf">
      <div class="headboxhc">
        <ul>
          <li class="finger" @click="set('home')"> 设为首页</li>
          <li>|</li>
          <li class="finger" @click="set('collect')">收藏本站</li>
        </ul>
      </div>
    </div>
    <div class="wrapHeadBox">
      <div class="headbox">
        <a href="/">
          <div class="bannerLogo"></div>
        </a>
        <div class="fl right-logo">
          <img src="@/assets/img/logo_banner.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    set(val) {
      if(val == 'home') {
        this.$message('请至浏览器设定页面，将本站设为首页！');
      } else {
        this.$message('请按 Ctrl+D 收藏本站!');
      }
    }
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.headboxf {
  position: fixed;
  top: 0;
  z-index: 1100;
  width: 100%;
  height: 30px;
  position: relative;
  z-index: 1000;
  background: #343139;
  .headboxhc {
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      float: left;
      height: 30px;
      li {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        float: left;
        text-align: center;
        margin-left: 10px;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
.wrapHeadBox {
  background: #f0f0f0;
  .headbox {
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    z-index: 8;
    a {
      float: left;
    }
    .right-logo {
      padding-top: .8rem;
    }
    .bannerLogo {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 285px;
      height: 77px;
      margin-bottom: 20px;
      background: url('../assets/img/logo.png') no-repeat 50%;
      margin-top: 10px;
    }
  }
}
</style>