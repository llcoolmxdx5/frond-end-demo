<template>
  <div class="header">
    <slot name="back">

    </slot>
    <h1>猫眼电影</h1>
  </div>
</template>

<style lang="scss" scoped>
.header {
  line-height: 50.5px;
  text-align: center;
  background: #e54847;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 18px;
    color: white;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 300;
    flex: 1;
  }

  .icon-back {
    display: inline-block;
    width: 22.5px;
    height: 22.5px;
    vertical-align: middle;
    position: relative;
    margin-left: 20px;
  }

  .icon-back:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>

