<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      datetype: [],
    };
  },
  props: ["datatite", "dataecha"],
  methods: {
    gitechars() {
      console.log(this.dataecha.date);
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: this.datatite,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.dataecha.date,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: this.dataecha.source.map((item) => {
          return {
            name: item.type,
            type: "bar",
            barWidth: "5%",
            data: item.data,
          };
        }),
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.gitechars();
  },
};
</script>

<style lang="less" scoped>
#main {
  width: auto;
  height: 360px;
  margin-top: 20px;
  // background: red;
}
</style>