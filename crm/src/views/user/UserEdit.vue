<template>
  <el-dialog
    class="dialog-wrapper"
    @close="$emit('close')"
    title="编辑"
    :visible.sync="dialogFormVisible"
  >
    <el-form :model="user" :rules="rules" ref="userForm">
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="user.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio v-model="user.sex" :label="0">男</el-radio>
        <el-radio v-model="user.sex" :label="1">女</el-radio>
      </el-form-item>

      <el-form-item label="年龄" :label-width="formLabelWidth">
        <el-input-number v-model="user.age" :min="1" :max="100" label="描述文字"></el-input-number>
      </el-form-item>

      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker v-model="user.birthday" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>

      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="user.address" type="textarea" rows="2" placeholder></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "UserEdit",
  props: ["item"],
  data() {
    return {
      dialogFormVisible: true,
      formLabelWidth: "80px",
      user: {
        id: "",
        name: "",
        sex: 0,
        age: "1",
        birthday: "",
        address: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" }
        ]
      },
      userForm: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.userForm.validate(async valid => {
        console.log(valid);
        if (valid) {
          let rs = await this.$http.post("/api/user/update", { ...this.user });
          if (rs.data.code === 1) {
            this.$emit("close", "success");
          }
          console.log(rs);
        }
      });
    }
  },
  mounted() {
    this.user = Object.assign({}, this.item);
  }
};
</script>
<style lang="scss" scoped>
.dialog-wrapper {
  text-align: left;
}
.el-form {
  margin-right: 40px;
}
</style>


