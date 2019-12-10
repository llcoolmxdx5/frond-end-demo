<template>
  <a class="daily-item">
    <div class="daily-img" v-if="data.images">
      <img :src="imgPath + data.images[0]" />
    </div>
    <div class="daily-title" :class="{ noImg: !data.images }">{{ data.title }}</div>
  </a>
</template>

<script>
import $ from "../assets/util.js";
export default {
  name: "Item",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      imgPath: $.imgPath
    };
  }
};
</script>

