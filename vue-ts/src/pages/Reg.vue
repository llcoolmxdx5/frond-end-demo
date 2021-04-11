<template>
  <div class="reg">
    <h3>注册</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  beforeRouteLeave(to: Route, from: Route, next: Function) {
    console.log("组件内部的后置守卫");
    next();
  }
})
export default class Reg extends Vue {}
</script>
