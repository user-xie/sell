<template>
  <!-- 分页器 -->
  <div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20]"
        :pageSize="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totals: null,
      currentPage4: "",
      // 当前页码
      currentPage: "",
      // 每页条数
      pageSize: "",
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      // this.pageSize = val;
      this.$bus.$emit("mynumber", val);
      this.$bus.$emit("goodliy", val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // this.currentPage = val;
      this.$bus.$emit("Current", val);
      this.$bus.$emit("goodlit", val);
    },
  },
  created() {
    this.$bus.$on("getuserlist", (data) => {
      // console.log(data);
      this.totals = data.total;
    });
    this.$bus.$on("listgetpar", (res) => {
      // console.log(res);
      this.totals = res;
    });
  },
};
</script>

<style lang="less" scoped>
</style>