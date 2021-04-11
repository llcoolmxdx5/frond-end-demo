<template>
  <table class="v-table" cellspacing="0" cellpadding="0">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    fullBordered: Boolean,
    cellBordered: {
      type: Boolean,
      default: true
    },
    contentBordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-table {
  border-collapse: collapse;
  width: 100%;
  line-height: 1.5;
  padding-top: 10px;
  td {
    vertical-align: middle;
  }
}
</style>
