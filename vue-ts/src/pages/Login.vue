<template>
  <div class="login">
    <h3>登录</h3>
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  public login(): void {
    window.axios({
      url: "/api/login",
      method: "post",
      data: { username: "chenghao", password: "chenghao123" }
    })
    .then(res => {
      if (res.data.err == 0) {
        //中token到localStorage
        window.localStorage.setItem("user", JSON.stringify(res.data));
        //跳转之前页面
        this.$router.replace(this.$route.query.path as string);
      }
    });
  }
}
</script>
