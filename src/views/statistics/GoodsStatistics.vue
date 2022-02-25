<template>
  <div>
    <main-title>
      <el-time-select
        placeholder="起始时间"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
      >
      </el-time-select>
    </main-title>
    <div class="echart" v-if="dataechar">
      <EChartZhu datatite="商品统计" :dataecha="dataechar"> </EChartZhu>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
import EChartZhu from "@/components/EChartZhu.vue";
import { ordereCharts } from "@/api/echarts.js";

export default {
  data() {
    return {
      dataechar: "",
    };
  },
  components: {
    EChartZhu,
    MainTitle,
  },
  created() {
    ordereCharts().then((res) => {
      // console.log(res);
      this.dataechar = res.data.data;
      // console.log(this.dataechar);
    });
  },
};
</script>

<style lang="less" scoped>
.echart {
  width: 100%;
  height: 400px;
}
</style>