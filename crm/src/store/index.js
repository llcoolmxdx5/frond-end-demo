import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isshowBread: true
  },
  mutations: {
    UPDATE_BREAE(state, val) {
      state.isshowBread = val;
    }
  },
  actions: {},
  modules: {}
});
