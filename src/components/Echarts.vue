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
      //X轴数据
      dataXzhong: "",
      // 数据类型
      dataType: "",
      //   数据
      dataNum: "",
    };
  },
  props: ["titlecha", "echasData"],
  created() {
    this.dataXzhong = this.echasData.date;
    // 数据类型
    this.dataType = this.echasData.source.map((item) => {
      return item.type;
    });
    // 数据
    // console.log(this.echasData.source);
  },
  mounted() {
    // console.log("拿到了 ");
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: this.titlecha,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: this.dataType,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.dataXzhong,
      },
      yAxis: {
        type: "value",
      },
      //   循环生成
      series: this.echasData.source.map((item) => {
        return {
          name: item.type,
          type: "line",
          stack: "Total",
          data: item.data,
        };
      }),
    });
  },
};
</script>

<style lang="less" scoped>
#main {
  width: auto;
  height: 360px;
}
</style>