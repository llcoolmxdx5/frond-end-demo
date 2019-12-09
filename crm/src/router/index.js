import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/User";
import Roles from "../views/user/Roles";
import Login from "../views/login/Login";
import Statics from "../views/statics/Statics";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "user",
        component: User
      },
      {
        path: "roles",
        component: Roles
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/statics",
    name: "statics",
    component: Statics
  }
];

const router = new VueRouter({
  routes
});

export default router;
