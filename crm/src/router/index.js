import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/User";
import Roles from "../views/user/Roles";
import Login from "../views/login/Login";
import Statics from "../views/statics/Statics";

import store from "../store/index";
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
    redirect: "/home/statics",
    meta: {
      id: "1",
      name: "应用管理",
      class: "el-icon-user-solid"
    },
    children: [
      {
        path: "/home/statics",
        name: "statics",
        component: Statics
      },
      {
        path: "user",
        name: "user",
        component: User,
        meta: {
          id: "1-1",
          name: "用户管理"
        }
      },
      {
        path: "roles",
        name: "roles",
        component: Roles,
        meta: {
          id: "1-2",
          name: "角色管理"
        }
      }
    ]
  },
  {
    path: "/home",
    component: Home,
    meta: {
      name: "日志管理",
      id: "2",
      class: "el-icon-menu"
    },
    children: [
      {
        path: "syslog",
        meta: {
          name: "系统日志",
          id: "2-1"
        }
      },
      {
        path: "log",
        meta: {
          name: "管理员操作日志",
          id: "2-2"
        }
      },
      {
        path: "userlog",
        meta: {
          name: "用户使用日志",
          id: "2-3"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, _from, next) => {
  // TODO 调后端接口，token
  if (to.path === "/home/statics") {
    store.commit("UPDATE_BREAE", false);
  } else {
    store.commit("UPDATE_BREAE", true);
  }
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
