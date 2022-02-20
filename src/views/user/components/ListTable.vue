<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="账号" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.account }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户组" width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.userGroup }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="240">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.ctime }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--按钮 -->
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">批量删除</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import { userList } from "@/api/user.js";
export default {
  data() {
    return {
      tableData: null,
      datas: {
        currentPage: 1,
        pageSize: 5,
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    toggleSelection(rows) {
      console.log(111);
    },
    handleSelectionChange(val) {
      // this.multipleSelection = val;
    },
    getuserlist() {
      userList(this.datas).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.$bus.$emit("getuserlist", res.data);
      });
    },
  },
  created() {
    this.getuserlist();
    this.$bus.$on("mynumber", (res) => {
      this.datas.pageSize = res;
      this.getuserlist();
    });
    this.$bus.$on("Current", (res) => {
      this.datas.currentPage = res;
      this.getuserlist();
    });
  },
};
</script>

<style lang="less" scoped>
.el-button--default {
  background-color: #f56c6c;
  color: #fff;
}
.el-button--default:last-child {
  background-color: #409eff;
}
.el-button--mini:first-child {
  background-color: #fff;
  color: rgb(213, 214, 215);
}
</style>