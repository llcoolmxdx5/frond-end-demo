import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";
import Product from "../views/product/Product";
import Cart from "../views/cart/Cart";
import User from "../views/user/User";
import CityChoice from "../components/CityChioce";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/citychoice",
    name: "citychoice",
    component: CityChoice
  }
];

const router = new VueRouter({
  routes
});

export default router;
