<template>
  <div v-show="list.length">
    <div class="list-control">
      <div class="list-control-order">
        <span>排序:</span>
        <span
          class="list-control-order-item"
          :class="{ on: order === '' }"
          @click="handleOrderDefault">默认</span>
        <span
          class="list-control-order-item"
          :class="{ on: order === 'sales' }"
          @click="handleOrderSales">
          销量
          <template v-if="order === 'sales'">↓</template>
        </span>
        <span
          class="list-control-order-item"
          :class="{ on: order.indexOf('cost') > -1 }"
          @click="handleOrderCost">
          价格
          <template v-if="order === 'cost-asc'">↑</template>
          <template v-if="order === 'cost-desc'">↓</template>
        </span>
      </div>
    </div>
    <product v-for="item in list" :key="item.id" :info="item"></product>
    <div class="product-not-found" v-show="!filteredAndOrderedList.length">
      暂无相关商品
    </div>
  </div>
</template>

<script>
import Product from '../components/product.vue'
export default {
  components: { Product },
  data () {
    return {
      // 排序依据,可选值为
      // sales 销量
      // cost-desc(价格降序)
      // cost-asc(价格升序)
      order: ''
    }
  },
  methods: {
    handleOrderDefault () {
      this.order = ''
    },
    handleOrderSales () {
      this.order = 'sales'
    },
    handleOrderCost () {
      if (this.order === 'cost-desc') {
        this.order = 'cost-asc'
      } else {
        this.order = 'cost-desc'
      }
    }
  },
  computed: {
    list () {
      // 从vuex获取商品列表数据
      return this.$store.state.productList
    },
    filteredAndOrderedList () {
      // 复制原始数据
      let list = [...this.list]
      // TODO 按品牌过滤
      // TODO 按颜色过滤
      // 排序
      if (this.order !== '') {
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales)
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost)
        } else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost)
        }
      }
      return list
    }
  },
  mounted () {
    // 初始化时，通过vuex的action请求数据
    this.$store.dispatch('getProductList')
  }
}
</script>

<style lang="less" scoped>
.list-control {
  background-color: #ffffff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  &-filter {
    margin-bottom: 16px;
  }
  &-filter-item,
  &-order-item {
    cursor: pointer;
    display: inline-block;
    border: 1px solid #e9eaec;
    border-radius: 4px;
    margin-right: 6px;
    padding: 2px 6px;
    &.on {
      background-color: #f2352e;
      border: 1px solid #f2352e;
      color: #ffffff;
    }
  }
}
.product-not-found {
  text-align: center;
  padding: 32px;
}
</style>
