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
          this.$bus.$emit("delgoodsty", this.state);
        })
        .catch(() => {
          console.log("取消操作");
        });
    },
  },
};
</script>