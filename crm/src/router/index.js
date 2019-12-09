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
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "user",
        name: "user",
        component: User
      },
      {
        path: "roles",
        name: "roles",
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

router.beforeEach((to, _from, next) => {
  // TODO 调后端接口，token
  if (to.path === "/login") {
    if (sessionStorage.getItem("username")) {
      router.push("/home");
    } else {
      next();
    }
    return;
  }
  if (sessionStorage.getItem("username")) {
    next();
  } else {
    router.push("/login");
  }
});

export default router;
