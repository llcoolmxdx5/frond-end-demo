<template>
  <div class="movie-container">
    <DownloadApp />
    <Header></Header>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import DownloadApp from "@/components/DownloadApp";
export default {
  name: "Movie",
  components: { Header, DownloadApp }
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
