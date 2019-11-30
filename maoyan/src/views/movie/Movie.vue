<template>
  <div>
    <router-link to="/city">城市</router-link>
    <router-link to="/index/movie/hotshowing">正在热映</router-link>
    <router-link to="/index/movie/comingsoon">即将上映</router-link>
    <router-link to="/search">搜索</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Movie"
};
</script>
