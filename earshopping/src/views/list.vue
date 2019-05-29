<template>
  <div v-show="list.length">
    <product v-for="item in list" :key="item.id" :info="item"></product>
  </div>
</template>

<script>
import Product from '../components/product.vue'
export default {
  components: { Product },
  computed: {
    list () {
      // 从vuex获取商品列表数据
      return this.$store.state.productList
    }
  },
  mounted () {
    // 初始化时，通过vuex的action请求数据
    this.$store.dispatch('getProductList')
  }
}
</script>
