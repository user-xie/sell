<template>
  <div class="goodstype">
    <main-title>
      <span>商品分类</span>
      <el-button slot="butto" type="primary">商品分类</el-button></main-title
    >
    <!-- 表格 -->
    <div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column label="分类名称" width="340"> </el-table-column>
        <el-table-column property="name" label="是否启动" width="200">
          <el-switch
            v-model="values"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column property="address" width="200" label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      values: true,
      input: "",
      tableData: [
        {
          name: "王小虎",
          address: "上海市 ",
        },
      ],
      currentRow: null,
    };
  },
  components: {
    MainTitle,
  },
};
</script>

<style lang="less" scoped>
.goodstype {
  background-color: #fff;
  min-height: 400px;
}
/deep/.el-input__inner {
  width: 320px;
}
</style>