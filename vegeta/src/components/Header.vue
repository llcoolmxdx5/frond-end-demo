<template>
  <div>
    <div id="homeHeadTop">
      <div class="headLogoAB"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<!-- style cover -->
<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
#homeHeadTop {
  width: 100%;
  height: 80px;
  text-align: center;
  top: 0px;
  left: 0px;
  z-index: 10000;
  background: #f0f0f0;
}
.headLogoAB {
  width: 50%;
  height: 80px;
  margin: 0 auto;
  background: url('../assets/img/logo.png') 50% center / 90% no-repeat;
}
</style>