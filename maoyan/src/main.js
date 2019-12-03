import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "style/reset.scss";
import "style/common.scss";

Vue.config.productionTip = false;

Vue.filter("replaceUrl", (val, wh) => {
  return val.replace("w.h", wh);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
