<template>
  <span @click="open">{{ types }}</span>
</template>

<script>
export default {
  data() {
    return {
      state: true,
    };
  },
  props: {
    types: {
      type: String,
      default: "确认",
    },
    opensmg: {
      type: String,
      default: "是否继续",
    },
  },
  methods: {
    open() {
      this.$confirm(this.opensmg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("delinfo", this.state);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
          console.log(2222);
        });
    },
  },
};
</script>