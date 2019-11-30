import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 1,
    dataList: []
  },
  mutations: {
    UPDATE_LIST(state, list) {
      state.dataList = list;
    },
    DEL(state, id) {
      state.dataList.forEach((item, index) => {
        if (item.id === id) {
          state.dataList.splice(index, 1);
        }
      });
    },
    UPDATE_STATUS(state, item) {
      state.dataList.forEach((value, index) => {
        if (value.id === item.id) {
          state.dataList[index]["isEdit"] = item.status;
        }
      });
    },
    UPDATE(state, item) {
      state.dataList.forEach((value, index) => {
        if (value.id === item.id) {
          state.dataList[index]["name"] = item.name;
          state.dataList[index]["isEdit"] = item.status;
        }
      });
    },
    ADD(state, item) {
      state.dataList.push(item);
    }
  },
  actions: {
    getList(context) {
      fetch("https://api.myjson.com/bins/1h8gwt")
        .then(res => res.json())
        .then(result => {
          console.log(result);
          result.products.forEach(item => {
            item.isEdit = false;
          });
          context.commit("UPDATE_LIST", result.products);
        });
    }
  },
  modules: {}
});
