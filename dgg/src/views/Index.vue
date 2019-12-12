<template>
  <section class="dgg-flexview">
    <section class="dgg-scrollview-tabbar">
      <router-view name="home"></router-view> <!--  默认显示这个组件Home  -->
      <router-view></router-view>
      <Home />
    </section>
    <footer class="dgg-tabbar">
      <router-link to="/" active-class="dgg-tabbar-active" class="dgg-tabbar-item" tag="div" exact>
        <div class="dgg-tabbar-icon" @click="clickHandler('home')">
          <img :src="homePng" />
        </div>
        <div class="dgg-tabbar-txt">首页</div>
      </router-link>
      <router-link to="/product" active-class="dgg-tabbar-active" class="dgg-tabbar-item" tag="div">
        <div class="dgg-tabbar-icon" @click="clickHandler('product')">
          <img :src="productPng" />
        </div>
        <div class="dgg-tabbar-txt">分类</div>
      </router-link>
      <div class="dgg-tabbar-item" @click="clickHandler('tel')">
        <div class="dgg-tabbar-icon">
          <img src="@/assets/img/tel.png" />
        </div>
        <div class="dgg-tabbar-txt">电话</div>
      </div>
      <router-link to="/cart" active-class="dgg-tabbar-active" class="dgg-tabbar-item" tag="div">
        <div class="dgg-tabbar-icon" @click="clickHandler('cart')">
          <img src="@/assets/img/cart.png" />
        </div>
        <div class="dgg-tabbar-txt">购物车</div>
      </router-link>
      <router-link to="/user" active-class="dgg-tabbar-active" class="dgg-tabbar-item" tag="div">
        <div class="dgg-tabbar-icon" @click="clickHandler('user')">
          <img :src="userPng" />
        </div>
        <div class="dgg-tabbar-txt">我的</div>
      </router-link>
    </footer>
    <div class="dgg-advisory">
      <img src="@/assets/img/bot.png" alt />
    </div>
  </section>
</template>
<script>
import Home from "./home/Home";
export default {
  name: "Index",
  components: { Home },
  data() {
    return {
      isActive: "",
      homePng: require("@/assets/img/home.png"),
      productPng: require("@/assets/img/product.png"),
      userPng: require("@/assets/img/user.png")
    };
  },
  methods: {
    clickHandler(prop) {
      this.homePng = require("@/assets/img/home.png");
      this.productPng = require("@/assets/img/product.png");
      this.userPng = require("@/assets/img/user.png");
      switch (prop) {
        case "home":
          this.homePng = require("@/assets/img/home_active.png");
          break;
        case "product":
          this.productPng = require("@/assets/img/product_active.png");
          break;
        case "user":
          this.userPng = require("@/assets/img/user_active.png");
          break;
        case "tel":
          window.location.href = "tel:4000962540";
      }
    }
  },
  mounted() {
    this.clickHandler(this.$route.name);
  }
};
</script>
