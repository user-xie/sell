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
    };
  },

  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);

      this.$bus.$emit("mynumber", val);
      this.$bus.$emit("goodliy", val);
      this.$bus.$emit("goodtypy", val);
      this.$bus.$emit("ordertypy", val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);

      this.$bus.$emit("Current", val);
      this.$bus.$emit("goodlit", val);
      this.$bus.$emit("goodtypt", val);
      this.$bus.$emit("ordertypt", val);
    },
  },
  created() {
    this.$bus.$on("getuserlist", (data) => {
      this.totals = data.total;
    });
    // this.totals = 0;
    this.$bus.$on("listgetpar", (res) => {
      // console.log("sp" + res);
      this.totals = res;
    });
    // 商品分类
    this.$bus.$on("sungtype", (res) => {
      // console.log(res);
      this.totals = res;
    });
    this.$bus.$on("getordpa", (res) => {
      // console.log(res);
      this.totals = res;
    });
  },
};
</script>

<style lang="less" scoped>
</style>