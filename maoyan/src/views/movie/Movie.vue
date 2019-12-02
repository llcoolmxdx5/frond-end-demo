<template>
  <div class="movie-container">
    <Header></Header>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "Movie",
  components: { Header }
};
</script>

<style lang="scss" scoped>
@import "style/mixin.scss";
.movie-container {
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    height: 568.5px;
    overflow: auto;
  }
}
</style>
