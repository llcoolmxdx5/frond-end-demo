<template>
  <div class="login-wrapper">
    <el-form ref="form" :model="user" :rules="userRules" class="login-form">
      <h1>系统登录</h1>
      <el-form-item prop="username">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <!-- eslint-disable-next-line -->
        <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="user.checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <!-- eslint-disable-next-line -->
        <el-button type="primary" @click="handleSubmit" :loading="isLoading">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      user: {
        username: "",
        password: "",
        checked: false
      },
      userRules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            trigger: "blur",
            message: "密码长度为6-12位",
            min: 6,
            max: 12
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.isLoading = true;
          let result = await this.$http.post("/api/user/login", {
            username: this.user.username,
            password: this.user.password
          });
          if (result.data.code === 0) {
            this.$message({
              message: result.data.msg,
              type: "warning"
            });
          } else if (result.data.code === 200) {
            sessionStorage.setItem("username", this.user.username);
            if (this.user.checked) {
              localStorage.setItem("checked", true);
              localStorage.setItem("username", this.user.username);
              localStorage.setItem("password", this.user.password);
            } else {
              localStorage.removeItem("checked");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
            }
            this.$router.push("/home");
          }
          this.isLoading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    let checked = localStorage.getItem("checked");
    if (checked) {
      this.user.checked = true;
      this.user.username = localStorage.getItem("username");
      this.user.password = localStorage.getItem("password");
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .login-form {
    box-sizing: border-box;
    padding: 30px;
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 15px #858282;
    border-radius: 7px;
    h1 {
      text-align: center;
      line-height: 50px;
      font-size: 26px;
      margin-bottom: 30px;
    }
    button {
      width: 100%;
    }
  }
}
</style>
