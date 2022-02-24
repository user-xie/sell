<template>
  <div>
    <!-- 表格 -->
    <el-table
      v-if="tableData != null"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column fixed prop="orderNo" label="订单号" width="100">
      </el-table-column>
      <el-table-column prop="orderTime" label="下单时间" width="100">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="100">
      </el-table-column>
      <el-table-column prop="consignee" label="收货人" width="100">
      </el-table-column>
      <el-table-column prop="deliverAddress" label="配送地址" width="200">
      </el-table-column>
      <el-table-column prop="deliveryTime" label="送达时间" width="100">
      </el-table-column>
      <el-table-column prop="remarks" label="用户备注" width="100">
      </el-table-column>
      <el-table-column prop="orderAmount" label="订单金额" width="100">
      </el-table-column>
      <el-table-column prop="orderState" label="订单状态" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格
      tableData: null,
    };
  },
  methods: {
    handleClick(row) {
      // console.log(row);
    },
  },
  created() {
    this.$bus.$on("dataorder", (res) => {
      // console.log(res);
      this.tableData = res;
    });
  },
};
</script>

<style lang="less" scoped>
</style>