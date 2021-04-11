<template>
  <div class="user">
    <h3>用户</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Route } from "vue-router";
@Component({
  beforeRouteEnter(to: Route, from: Route, next: Function) {
    console.log("组件内部前置守卫");
    next();
  }
})
export default class User extends Vue {}
</script>
