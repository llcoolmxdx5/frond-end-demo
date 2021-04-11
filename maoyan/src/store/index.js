import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDownload: true
  },
  mutations: {
    UPDATE_DOWNLOAD_STATUS(state, status) {
      state.showDownload = status;
    }
  },
  actions: {},
  modules: {}
});
