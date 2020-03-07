<template>
  <div>
    <h3>首页</h3>
    <!-- <div>{{stateHome}}</div> -->
    <div>{{h11}}</div>
    <div>{{bLoading}}</div>
    <div>{{getterBloading}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
// import axios from "axios";
import { State, Getter, Action, Mutation } from "vuex-class";

@Component({})
export default class Home extends Vue {
  // mounted(): void {
  //   // axios({
  //   window.axios({
  //     url: "/api/goods/home"
  //   }).then(res => console.log(res.data));
  // }
  //装饰state
  @State bLoading: boolean | undefined;
  @State("home") stateHome!: object[]; //组件内的stateHome使用
  @State(state => state.home[0]) h11!: object; //回调形式抓取state

  //装饰getters
  @Getter("bLoading") getterBloading!: string;
  // @Getter bLoading!:boolean;

  @Action("UPDATE_HOME") updateHome!: (payload: object) => void;
  @Action UPDATE_HOME!: (payload: object) => void;

  @Mutation("UPDATE_LOADING") upLoading!: (payload: boolean) => void;
  @Mutation UPDATE_LOADING!: (payload: boolean) => void;

  mounted() {
    this.UPDATE_HOME({
      _page: 1,
      _limit: 1
    });

    this.upLoading(true);
  }
}
</script>