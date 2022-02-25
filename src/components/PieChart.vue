<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["datatite", "datapie"],
  methods: {
    getpiechas() {
      console.log(this.datapie);
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      (option = {
        title: {
          text: this.datatite,
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "60%",
            data: this.datapie.source.map((item) => {
              return { value: item.data[0], name: item.type };
            }),
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }),
        option && myChart.setOption(option);
    },
  },
  mounted() {
    this.getpiechas();
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