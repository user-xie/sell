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
    <div class="tables" v-if="EchartData">
      <echarts titlecha="外卖数据统计" :echasData="EchartData"> </echarts>
    </div>
  </div>
</template>

<script>
import DataItem from "./components/DataItem.vue";
import Echarts from "@/components/Echarts.vue";
import { homeEchart } from "@/api/echarts.js";
export default {
  data() {
    return {
      EchartData: "",
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
    Echarts,
  },
  methods: {
    changesize() {},
  },
  created() {
    homeEchart().then((res) => {
      console.log(res);
      if (res.data.code === 0) {
        this.EchartData = res.data.data;
        // console.log(this.EchartData);
      }
    });
  },
  //
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