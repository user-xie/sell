<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
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
            ><open :types="String('删除')" :opensmg="opensmg"> </open
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--按钮 -->
    <div style="margin-top: 20px">
      <el-button @click="deluserAll()">
        <open :types="String('批量删除')" :opensmg="opensmg"> </open
      ></el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog title="修改账号" :visible.sync="isdisplay" width="500px">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="90px">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户组" label-width="90px">
          <el-select v-model="form.userGroup" placeholder="请选择用户组">
            <el-option label="普通管理员" value="普通管理员"></el-option>
            <el-option label="超级管理员" value="超级管理员"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isdisplay = false">取 消</el-button>
        <el-button type="primary" @click="modifyname()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { userList, userDel, usersBatchdel, modifyuser } from "@/api/user.js";
import Open from "@/components/Open.vue";

export default {
  components: {
    Open,
  },
  data() {
    return {
      opensmg: "此操作将永久删除, 是否继续?",
      tableData: null,
      datas: {
        currentPage: 1,
        pageSize: 5,
      },
      deluserid: null,
      multipleSelection: [],
      alldeluser: [],
      // 编辑框
      isdisplay: false,
      form: {
        account: "",
        userGroup: "",
        id: "",
      },
    };
  },
  methods: {
    // 编辑按钮事件
    handleEdit(index, row) {
      console.log(index, row);
      this.isdisplay = true;
      let { account, id, userGroup } = row;
      this.form = { account, id, userGroup };
    },
    // 修改信息点击确认对接修改账号接口事件
    modifyname() {
      console.log(this.form);
      modifyuser(this.form).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          // 修改成功事件
          this.isdisplay = false;
          // 重新渲染列表
          this.getuserlist();
        }
      });
    },
    handleDelete(index, row) {
      // console.log(index, row);
      this.deluserid = row.id;
      // console.log(this.deluserid);
    },
    // 批量删除方法
    deluserAll() {
      this.$bus.$on("delinfo", (res) => {
        if (res) {
          let data = {
            ids: JSON.stringify(this.alldeluser),
          };
          usersBatchdel(data).then((res) => {
            if (res.data.code === 0) {
              this.getuserlist();
            }
          });
        }
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
        // console.log(rows);
      }
    },
    // 获取选择框为turn的数据
    handleSelectionChange(val) {
      this.alldeluser = val.map((item) => {
        return item.id;
      });
    },
    // 获取用户列表函数
    getuserlist() {
      userList(this.datas).then((res) => {
        // console.log(res);
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
    // 单个删除个人账号
    this.$bus.$on("delinfo", (res) => {
      // console.log(res + "1111");
      if (res) {
        let data = {
          id: this.deluserid,
        };
        userDel(data).then((res) => {
          // console.log(res);
          if (res.data.code == 0) {
            // 重新渲染用户列表
            this.getuserlist();
          }
        });
      }
      // this.getuserlist();
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