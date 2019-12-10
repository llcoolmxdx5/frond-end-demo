<template>
  <el-container class="home-container">
    <el-header>
      <el-row>
        <el-col :span="4" :offset="18">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              欢迎，{{ username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="quit">退出</el-dropdown-item>
              <el-dropdown-item command="set">设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <MenuBar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuBar from "../components/MenuBar";
export default {
  name: "home",
  components: { MenuBar },
  data() {
    return {
      username: ""
    };
  },
  methods: {
    async handleCommand(command) {
      if (command === "quit") {
        console.log(command);
        let res = await this.$http.get("/api/user/logout");
        if (res.data.code === 200) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          sessionStorage.removeItem("username");
          this.$router.push("/login");
        }
      } else if (command === "set") {
        console.log(command);
      }
    }
  },
  mounted() {
    this.username = sessionStorage.getItem("username");
  }
};
</script>
<style lang="scss">
.home-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
