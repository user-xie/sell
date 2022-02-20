<template>
  <div>
    <div class="topnum">
      <data-item
        v-for="(item, index) in datalists"
        :key="index"
        :transmiss="item"
      >
      </data-item>
    </div>
    <!-- 折线图 -->
    <div class="tables">
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
import DataItem from "./components/DataItem.vue";
import * as echarts from "echarts";
export default {
  data() {
    return {
      datalists: [
        {
          color: { color: "#0c93da" },
          class: "icon-zongdingdan",
          title: "总订单",
          nums: 102400,
        },
        {
          color: { color: "#d31e77" },
          class: "icon-qian",
          title: "总销售额",
          nums: 24501,
        },
        {
          color: { color: "#0c93da" },
          class: "icon-dingdan1",
          title: "今日订单数",
          nums: 20440,
        },
        {
          color: { color: "#1afa29" },
          class: "icon-renminbi",
          title: "今日销售额",
          nums: 95468,
        },
      ],
    };
  },
  components: {
    DataItem,
  },
  methods: {
    changesize() {},
  },
  //
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "数据统计",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["订单", "销售额", "注册人数", "管理人员"],
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "订单",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "销售额",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "注册人数",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "管理人员",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    });
    // window.addEventListener("resize", function () {
    //   console.log(111);
    //   // this.resize();
    // });
  },
};
</script>

<style lang="less" scoped>
.topnum {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.tables {
  width: 100%;
  height: 360px;
  margin-top: 40px;
  background-color: #fff;
}
#main {
  width: auto;
  height: 360px;
}
</style>