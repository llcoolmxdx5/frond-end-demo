import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";
import Index from "../views/Index";
import Product from "../views/product/Product";
import Cart from "../views/cart/Cart";
import User from "../views/user/User";
import CityChoice from "../components/CityChioce";
import Search from "../components/Search";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    components: {
      default: Index,
      home: Home
    },
    children: [
      {
        path: "product",
        name: "product",
        component: Product
      },
      {
        path: "cart",
        name: "cart",
        component: Cart
      },
      {
        path: "user",
        name: "user",
        component: User
      }
    ]
  },
  {
    path: "/citychoice",
    name: "citychoice",
    component: CityChoice
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
];

const router = new VueRouter({
  routes
  // mode: "history"
});

export default router;
