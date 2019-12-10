<template>
  <el-menu default-active="1-1" :default-openeds="['1','2']" class="el-menu-vertical-demo">
    <el-submenu :index="item.meta.id" v-for="(item, index) of getList" :key="index">
      <template slot="title">
        <i :class="item.meta.class"></i>
        <span>{{ item.meta.name }}</span>
      </template>
      <el-menu-item
        :index="sub.meta.id"
        v-for="sub of item.children"
        :key="sub.meta.id"
        @click="clickHandler(sub)"
      >{{ sub.meta.name }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "MenuBar",
  computed: {
    getList() {
      return this.$router.options.routes.filter(item => item.meta);
    }
  },
  methods: {
    clickHandler(obj) {
      console.log(obj)
      this.$router.push(obj.path)
    }
  }
};
</script>
