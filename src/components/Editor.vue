<template>
  <div>
    <div id="mains"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      shudutime: 0,
    };
  },
  watch: {
    shudutime: {
      handler(news) {
        if (news < 50) {
          this.$nextTick(() => {
            setTimeout(() => {
              this.shudutime++;
            }, 80);
            this.carshudu();
          });
        }
      },
      immediate: true,
    },
  },
  mounted() {
    // this.shudutime++;
    this.carshudu();
  },
  methods: {
    carshudu() {
      //   this.$nextTick(() => {
      var chartDom = document.getElementById("mains");
      var myChart = echarts.init(chartDom, "dark");
      var option;

      option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
            },
            data: [
              {
                value: this.shudutime,
                name: "SCORE",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
      //   });
    },
  },
};
</script>

<style lang="less" scoped>
#mains {
  width: 400px;
  height: 300px;
  border: 1px solid #f60;
}
</style>