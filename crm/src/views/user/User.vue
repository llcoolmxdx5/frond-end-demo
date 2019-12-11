<template>
  <div>
    <UserAdd v-if="showadd" @close="handleAddClose"></UserAdd>
    <UserEdit v-if="showEdit" :item="currentUser" @close="handleEditClose" />
    <el-row class="toolbar">
      <el-col class="textInput">
        <el-input placeholder="姓名" v-model="name"></el-input>
      </el-col>
      <el-col class="btnBox">
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      v-loading="isLoading"
      :height="getHeight()"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="#" width="55" type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="110"></el-table-column>
      <el-table-column label="性别" prop="sex" sortable width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex | formatsex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" prop="age" sortable width="120"></el-table-column>
      <el-table-column label="生日" prop="birthday" width="150"></el-table-column>
      <el-table-column label="地址" prop="address" width="600"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="footer">
      <el-col :span="4">
        <el-button type="danger" @click="handleBatchDel">批量删除</el-button>
      </el-col>
      <el-col :span="20">
        <el-pagination
          background
          :page-size="pagesize"
          :page-count="pagenos"
          layout="prev, pager, next"
          @current-change="currentChange"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
export default {
  name: "User",
  components: { UserAdd, UserEdit },
  data() {
    return {
      showadd: false,
      showEdit: false,
      selectedList: [],
      currentUser: {},
      pagesize: 15,
      pageno: 1,
      name: "",
      total: 0,
      tableData: [],
      isLoading: false
    };
  },
  computed: {
    pagenos() {
      return Math.floor(this.total / this.pagesize);
    }
  },
  filters: {
    formatsex(val) {
      return val == "0" ? "男" : "女";
    }
  },
  methods: {
    getHeight() {
      return window.innerHeight - 215;
    },
    async querylist() {
      let params = {
        pageno: this.pageno,
        pagesize: this.pagesize,
        name: this.name
      };
      this.isLoading = true;
      let rs = await this.$http.post("/api/user/list", params);
      this.tableData = rs.data.list;
      this.total = rs.data.total;
      this.isLoading = false;
    },
    handleQuery() {
      this.querylist();
    },
    handleDel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let rs = await this.$http.post("/api/user/del", { id });
          console.log(rs);
          if (rs.data.code === 200) {
            this.$message({
              type: "success",
              message: rs.data.message
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    indexMethod(index) {
      return index + 1 + this.pagesize * (this.pageno - 1);
    },
    handleEdit(user) {
      this.showEdit = true;
      this.currentUser = user;
    },
    currentChange(size) {
      this.pageno = size;
      this.querylist();
    },
    handleAdd() {
      this.showadd = true;
    },
    handleAddClose(message) {
      console.log("close dialog");
      if ("success" === message) {
        this.$message({
          type: "success",
          message: "添加数据成功"
        });
        this.querylist();
      }
      this.showadd = false;
    },
    handleEditClose(message) {
      if ("success" === message) {
        this.$message({
          type: "success",
          message: "添加更新成功"
        });
        this.querylist();
      }
      this.showEdit = false;
    },
    async handleBatchDel() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          var rs = await this.$http.post(
            "/api/user/batchdel",
            this.selectedList
          );
          if (rs.data.code === 1) {
            this.$message({
              type: "success",
              message: rs.data.message
            });
            this.querylist();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSelect(val) {
      console.log(val);
      this.selectedList = [];
      val.forEach(item => {
        this.selectedList.push(item.id);
      });
    }
  },
  created() {
    this.querylist();
  }
};
</script>
<style lang="scss">
.toolbar {
  line-height: 60px;
  .textInput {
    width: 180px;
  }
  .btnBox {
    width: 180px;
  }
}
.footer {
  background: white;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  padding-left: 15px;
}
.el-pagination {
  text-align: right;
}
</style>
