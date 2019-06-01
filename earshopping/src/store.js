import Vue from 'vue'
import Vuex from 'vuex'
import productData from './product.js'

Vue.use(Vuex)

// 数组去重
function getFilterArray (array) {
  const res = []
  const json = {}
  for (let i = 0; i < array.length; i++) {
    const _self = array[i]
    if (!json[_self]) {
      res.push(_self)
      json[_self] = 1
    }
  }
  return res
}

export default new Vuex.Store({
  state: {
    // 商品列表数据
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.id)
      return getFilterArray(brands)
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return getFilterArray(colors)
    }
  },
  mutations: {
    // 添加商品列表
    setProductList (state, data) {
      state.productList = data
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过ajax获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', productData)
      }, 500)
    }
  }
})
