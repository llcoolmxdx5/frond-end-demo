<template>
  <div class="index-container">
    <div class="title">
      <h1>猫眼电影</h1>
    </div>
    <router-view></router-view>
    <ul>
      <router-link to="/index/movie" tag="li">电影</router-link>
      <router-link to="/index/theater" tag="li">影院</router-link>
      <router-link to="/index/profile" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style lang="scss" scoped>
.index-container {
  .title {
    height: 50.5px;
    line-height: 50.5px;
    text-align: center;
    background-color: #e54847;
    h1 {
      font-size: 18px;
      font-weight: 400;
      color: white;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    }
  }
}
</style>
