<template>
  <div>
    <div class="title">
      <slot></slot>
      <slot name="butto"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  color: #989899;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #e8e9eb;
}
.el-button--primary {
  margin-right: 10px;
}
</style>