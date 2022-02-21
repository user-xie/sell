<template>
  <div class="goodstype">
    <main-title>
      <span>商品分类</span>
      <el-button slot="butto" type="primary">商品分类</el-button></main-title
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
        </el-table-column>
        <el-table-column label="是否启用" width="280" prop="state">
          <el-switch active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
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
    </div>
    <!-- 分页器 -->
    <pager></pager>
  </div>
</template>

<script>
import { goodsCatlist } from "@/api/user.js";
import MainTitle from "@/components/MainTitle.vue";
import Pager from "../../components/Pager.vue";
export default {
  data() {
    return {
      total: "",
      tableData: [],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  components: {
    MainTitle,
    Pager,
  },
  created() {
    let data = {
      currentPage: 1,
      pageSize: 5,
    };
    goodsCatlist(data).then((res) => {
      // console.log(res);
      if (res.statusText == "OK") {
        let { data, total } = res.data;
        // console.log(data);
        this.tableData = data;
        this.total = total;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.goodstype {
  background-color: #fff;
  min-height: 400px;
}
</style>