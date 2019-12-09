<template>
  <div class="login-wrapper">
    <el-form ref="form" :model="user" :rules="userRules" class="login-form">
      <h1>系统登录</h1>
      <el-form-item prop="username">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="checked">
        <el-checkbox v-model="user.checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
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
            trigger: "blur",
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
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.user);
          this.$http.post("/api/user/login", {
            username: this.user.username,
            password: this.user.password
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
    .checked {
      margin-left: 0;
    }
    button {
      width: 100%;
    }
  }
}
</style>
