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
      const brands = state.productList.map(item => item.brand)
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
    },
    // 添加到购物车
    addCart (state, id) {
      // 先判断购物车是否已有，如果有，数量+1
      const isAdded = state.cartList.find(item => item.id === id)
      if (isAdded) {
        isAdded.count++
      } else {
        state.cartList.push({
          id: id,
          count: 1
        })
      }
    },
    // 修改商品数量
    editCartCount (state, payload) {
      const product = state.cartList.find(item => item.id === payload.id)
      product.count += payload.count
    },
    // 删除商品
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    // 清空购物车
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过ajax获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProductList', productData)
      }, 500)
    },
    // 购买
    buy (context) {
      // 真实环境应通过ajax提交购买请求后在清空购物车
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }
  }
})
