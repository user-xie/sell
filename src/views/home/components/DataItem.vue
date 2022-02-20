<template>
  <div>
    <div class="dataitem">
      <div>
        <i
          class="iconfont"
          :class="transmiss.class"
          :style="transmiss.color"
        ></i>
      </div>
      <div class="shju_box">
        <div>{{ transmiss.title }}</div>
        <span>{{ transmiss.nums }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["transmiss"],
};
</script>

<style lang="less" scoped>
.dataitem {
  width: 200px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconfont {
  font-size: 70px;
}
.shju_box {
  font-size: 18px;
  div {
    margin-bottom: 12px;
    color: #cfcfcf;
  }
  span {
    font-weight: bold;
  }
}
</style>