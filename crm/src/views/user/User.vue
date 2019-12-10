<template>
  <div>
    <el-row class="toolbar">
      <el-col class="textInput">
        <el-input placeholder="姓名" v-model="name"></el-input>
      </el-col>
      <el-col class="btnBox">
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button type="primary">新增</el-button>
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
      <el-table-column label="#" width="55"></el-table-column>
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
          <el-button>编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size="pagesize"
      :page-count="pagenos"
      layout="prev, pager, next"
      @current-change="currentChange"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
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
    currentChange(size) {
      this.pageno = size;
      this.querylist();
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
.el-pagination {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  background: white;
}
</style>
