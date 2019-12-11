<template>
  <el-menu :default-openeds="['1','2']" class="el-menu-vertical-demo">
    <el-submenu
      :index="item.meta.id"
      v-for="(item, index) of getNav(this.$router.options.routes)"
      :key="index"
    >
      <template slot="title">
        <i :class="item.meta.class"></i>
        <span>{{ item.meta.name }}</span>
      </template>
      <el-menu-item
        :index="sub.meta.id"
        v-for="sub in getNav(item.children)"
        :key="sub.meta.id"
        @click="clickHandler(sub)"
      >{{ sub.meta.name }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "MenuBar",
  computed: {},
  methods: {
    clickHandler(obj) {
      this.$router.push(obj.path);
    },
    getNav(list) {
      return list.filter(item => {
        return item.meta && item.meta.name;
      });
    }
  }
};
</script>
