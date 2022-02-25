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
    <div v-if="dataechar" class="picece">
      <pie-chart datatite="订单统计" :datapie="dataechar"> </pie-chart>
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/PieChart.vue";
import MainTitle from "@/components/MainTitle.vue";
import { ordereCharts } from "@/api/echarts.js";

export default {
  data() {
    return {
      dataechar: "",
    };
  },
  components: {
    PieChart,
    MainTitle,
  },
  created() {
    ordereCharts().then((res) => {
      // console.log(res);
      this.dataechar = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.picece {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
</style>