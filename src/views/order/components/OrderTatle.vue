<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="订单号" width="100">
      </el-table-column>
      <el-table-column prop="name" label="下单时间" width="100">
      </el-table-column>
      <el-table-column prop="province" label="手机号" width="100">
      </el-table-column>
      <el-table-column prop="city" label="收货人" width="100">
      </el-table-column>
      <el-table-column prop="address" label="配送地址" width="200">
      </el-table-column>
      <el-table-column prop="zip" label="送达时间" width="100">
      </el-table-column>
      <el-table-column prop="remarks" label="用户备注" width="100">
      </el-table-column>
      <el-table-column prop="money" label="订单金额" width="100">
      </el-table-column>
      <el-table-column prop="state" label="订单状态" width="100">
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
      tableData: [
        {
          date: "1421553",
          name: "19:00:00",
          province: "17628614745",
          city: "小胡",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: "19:32:00",
          remarks: "快点",
          money: 108,
          state: "准备发货",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="less" scoped>
</style>