<template>
  <div class="error">
    <div>404</div>
    <p>亲爱的用户，你访问的页面不存在！</p>
    <el-button type="primary" @click="back()"> 返回上一页 </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.error {
  width: 100%;
  text-align: center;
  div {
    font-size: 70px;
    color: red;
    font-weight: 800px;
    line-height: 300px;
  }
  p {
    font-size: 20px;
    line-height: 50px;
  }
}
</style>