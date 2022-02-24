<template>
  <div class="goodstype">
    <main-title>
      <span>商品分类</span>
      <el-button slot="butto" type="primary" size="mini" @click="openaddtype()"
        >添加分类</el-button
      ></main-title
    >
    <!-- 表格 -->
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column
          prop="cateName"
          label="分类名称"
          width="380"
          header-align="left"
        >
          <template slot-scope="scope">
            <p v-show="!scope.row.flag">{{ scope.row.cateName }}</p>
            <el-input v-model="scope.row.cateName" v-show="scope.row.flag">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column label="是否启用" width="280">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              active-color="#13ce66"
              :disabled="!scope.row.flag"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              v-show="scope.row.flag"
              @click="Complete(scope.$index, scope.row)"
              >完成</el-button
            >
            <el-button
              v-show="!scope.row.flag"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              ><open :types="String('删除')" :opensmg="opensmg"></open
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <pager></pager>
    <!--添加分类对话框 -->
    <el-dialog title="收货地址" :visible.sync="openstate">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="'100px'">
          <el-input
            v-model="form.cateName"
            autocomplete="off"
            placeholder="分类名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="'100px'">
          <el-switch
            v-model="form.state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="1"
            inactive-value="0"
          >
          </el-switch
        ></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="openstate = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { goodsCatlist, goodsEdit, goodsaddty, goodsDelty } from "@/api/user.js";
import MainTitle from "@/components/MainTitle.vue";
import Open from "@/components/Open.vue";

import Pager from "../../components/Pager.vue";
export default {
  data() {
    return {
      opensmg: "此操作将永久删除, 是否继续?",

      total: "",
      tableData: [],
      data: {
        currentPage: 1,
        pageSize: 5,
      },
      delgoodtyID: "",
      openstate: false,
      // 添加商品类型
      form: {
        cateName: "",
        state: 0,
      },
    };
  },
  methods: {
    // 编辑按钮事件
    handleEdit(index, row) {
      // console.log(index, row);
      // console.log(this.tableData);
      row.flag = true;
    },
    // 删除按钮事件
    handleDelete(index, row) {
      // console.log(index, row);
      this.delgoodtyID = row.id;
    },
    // 输入添加分类完成按钮
    dialogFormVisible() {
      // console.log(this.form);
      goodsaddty(this.form).then((res) => {
        // console.log(res);
        if (res.data.code === 0) {
          this.openstate = false;
          this.cateName = "";
          this.state = 0;
          this.getgoodsTy();
        }
      });
    },
    // 编辑完成之后事件
    Complete(index, row) {
      goodsEdit(row).then((res) => {
        // 修改成功后
        if (res.data.code === 0) {
          row.flag = false;
        }
      });
    },
    // 打开对话框
    openaddtype() {
      this.openstate = true;
    },
    // 请求商品分类函数
    getgoodsTy() {
      goodsCatlist(this.data).then((res) => {
        if (res.statusText == "OK") {
          let { data, total } = res.data;
          // console.log(data, total);
          this.$bus.$emit("sungtype", total);
          data.forEach((item) => {
            item.flag = false;
          });
          // console.log(data);
          this.tableData = data;
          this.total = total;
        }
      });
    },
  },
  components: {
    MainTitle,
    Pager,
    Open,
  },

  created() {
    this.$bus.$on("goodtypy", (res) => {
      this.data.pageSize = res;
      this.getgoodsTy();
    });
    this.$bus.$on("goodtypt", (res) => {
      this.data.currentPage = res;
      this.getgoodsTy();
    });
    // 删除按钮事件
    this.$bus.$on("delgoodsty", (res) => {
      if (res) {
        let data = {
          id: this.delgoodtyID,
        };
        goodsDelty(data).then((res) => {
          // console.log(res);
          if (res.data.code === 0) {
            // 重新渲染页面
            this.getgoodsTy();
          } else if (res.data.code === 1) {
          }
        });
      }
    });
    this.getgoodsTy();
  },
};
</script>

<style lang="less" scoped>
.goodstype {
  background-color: #fff;
  min-height: 400px;
}
/deep/.el-dialog {
  width: 30%;
}
</style>