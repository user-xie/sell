<template>
  <div class="wapper">
    <vueSeamlessScroll
      :data="listData"
      class="seamless-warp"
      :class-option="classOption"
    >
      <div class="tableList_content_list_box boxs">
        <el-table :data="listData" :show-header="false">
          <el-table-column type="index" :index="1" width="25"></el-table-column>
          <el-table-column label="名称" prop="projectName" width="100">
          </el-table-column>
          <el-table-column
            prop="content"
            label="内容"
            show-overflow-tooltip="true"
          >
          </el-table-column>
        </el-table>
      </div>
    </vueSeamlessScroll>
  </div>
</template>
 
<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "Analysis",
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      listData: [
        {
          projectName: "数组城管1",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管3",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管4",
          content: "章就分望对大家有用",
        },
        {
          projectName: "数组城管5",
          content: "章就分享到这里sadddddddddd，希望对大家有用",
        },
        {
          projectName: "数组城管6",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管7",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管8",
          content: "章就分享到这里，希望对大家有用",
        },
        {
          projectName: "数组城管9",
          content: "章就分享到这里，希望对大家有用",
        },
      ],
      listLenght: 5,
    };
  },
  computed: {
    classOption() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: this.listLenght, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 48, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  created() {
    this.toCapitalProjectList();
  },
  methods: {
    toCapitalProjectList() {
      this.listData.forEach((element, inex) => {
        element.index = inex + 1;
        return element;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.boxs {
  cursor: pointer;
  width: 100%;
}
</style>