<template>
  <div id="app">
    vue + ts
    <!-- <ClassComponent p1="app的class"></ClassComponent>
    <ExtendComponent p1="app的extends"></ExtendComponent>
    <FunctionComponent bb1="app的functional"></FunctionComponent> -->
    <Header/>
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
// import ClassComponent from "./components/ClassComponent.vue";
// import ExtendComponent from "./components/ExtendComponent.vue";
// import FunctionComponent from "./components/FunctionComponent.vue";
import Header from './Header.vue'
@Component({
  components: {
    // ClassComponent,
    // ExtendComponent,
    // FunctionComponent,
    Header
  }
})
export default class App extends Vue {
  // show(): void {
  //   alert("app的show");
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
