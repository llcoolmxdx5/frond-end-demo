import Vue from "vue";
import VueRouter from "vue-router";
import City from "../components/City";
import Search from "../components/Search";
import Index from "../views/Index";
import Movie from "../views/movie/Movie";
import HotShowing from "../views/movie/components/HotShowing";
import ComingSoon from "../views/movie/components/ComingSoon";
import Theater from "../views/theater/Theater";
import Profile from "../views/profile/Profile";

import Detail from "../views/detail/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index/movie/hotshowing"
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  },
  {
    path: "/city",
    component: City
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/index",
    component: Index,
    children: [
      {
        path: "movie",
        component: Movie,
        redirect: "/index/movie/hotshowing",
        children: [
          {
            path: "hotshowing",
            component: HotShowing
          },
          {
            path: "comingsoon",
            component: ComingSoon
          }
        ]
      },
      {
        path: "theater",
        component: Theater
      },
      {
        path: "profile",
        component: Profile
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
