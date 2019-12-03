<template>
  <div class="expected-item">
    <div class="bg-img">
      <img :src="item.img | replaceUrl('170.230')" alt width="85" height="115" />
      <span class="wish-bg"></span>
      <span class="wish">
        <span class="wish-num">{{ item.wish }}</span>人想看
      </span>
    </div>
    <h5 class="name line-ellipsis">{{ item.nm }}</h5>
    <p class="date">{{ item.comingTitle.split(" ")[0] }}</p>
  </div>
</template>
<script>
export default {
  name: "MostExceptItem",
  props: ["item"]
};
</script>
<style lang="scss">
.expected-item {
  width: 85px;
  height: 160px;
  margin-right: 10px;
  display: inline-block;
  .bg-img {
    width: 85px;
    height: 115px;
    position: relative;
    margin-bottom: 6px;
    background-color: #e1e1e1;
    background-size: 100% 100%;
    .wish-bg {
      display: inline-block;
      width: 100%;
      height: 35px;
      position: absolute;
      bottom: 0;
      background-image: -webkit-linear-gradient(top, rgba(77, 77, 77, 0), #000);
      background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
    }
    .wish {
      position: absolute;
      left: 4px;
      bottom: 2px;
      color: #faaf00;
      font-size: 11px;
      font-weight: 600;
    }
  }
  .name {
    margin: 0;
    font-size: 13px;
    color: #222;
    margin-bottom: 3px;
  }
  .date {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
}
</style>
