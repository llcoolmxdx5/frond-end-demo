<template>
  <div class="header">
    <router-link tag="div" class="city" to="/city">
      <span>城市</span>
      <i></i>
    </router-link>
    <router-link tag="div" class="hot" active-class="active" to="/index/movie/hotshowing">正在热映</router-link>
    <router-link tag="div" class="come" active-class="active" to="/index/movie/comingsoon">即将上映</router-link>
    <router-link tag="div" class="search" to="/search"></router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.header {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  color: #666;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  @include border-1px(#d8d8d8);
  .city {
    width: 75px;
    display: flex;
    padding-left: 15px;
    line-height: 1.5;
    span {
      flex-basis: 40px;
      margin-left: 5px;
    }
    i {
      margin-top: 8px;
      border: 4px solid #666;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
  .hot,
  .come {
    width: 80px;
    margin-left: 12px;
    margin-right: 12px;
    line-height: 44px;
    font-weight: 700;
    position: relative;
  }
  .search {
    width: 20px;
    height: 20px;
    background: url(../../../assets/img/search.png) no-repeat;
    background-size: 20px;
    padding: 10px 15px 10px 10px;
    background-position: 10px;
    margin-left: auto;
  }
  .active {
    color: #ef4238;
  }
  .active:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    width: 80px;
    height: 2px;
    background-color: #ef4238;
    -webkit-transition: left 0.2s;
    transition: left 0.2s;
  }
}
</style>
