<template>
  <div class="">
    <div class="inputs">
      <div>
        <span>订单号</span>
        <el-input v-model="input1" placeholder="订单号"></el-input>
      </div>
      <div>
        <span>收货人</span>
        <el-input v-model="input2" placeholder="收货人"></el-input>
      </div>
      <div>
        <span>手机号</span
        ><el-input v-model="input3" placeholder="手机号"></el-input>
      </div>
      <div>
        <span>订单状态</span>
        <template>
          <el-select v-model="value" placeholder="订单状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </div>
    </div>
    <div class="datas">
      <span>选择时间</span>
      <el-time-picker
        is-range
        v-model="value1"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </el-time-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <!-- 表格站位 -->
    <div class="order_table">
      <order-tatle> </order-tatle>
    </div>
    <!-- 分页器 -->
    <div>
      <pager> </pager>
    </div>
  </div>
</template>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTatle from "./components/OrderTatle.vue";
// 分页器
import Pager from "@/components/Pager.vue";
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
  components: {
    OrderTatle,
    Pager,
  },
};
</script>

<style lang="less" scoped>
.inputs {
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;

    span {
      width: 40%;
      margin-left: 10px;
    }
  }
}
.datas {
  margin: 15px 10px;
  display: flex;
  align-items: center;
  .el-button--primary {
    height: 38px;
    margin-left: 10px;
  }
  .el-range-editor {
    margin-left: 10px;
  }
}
.order_table {
  width: 100%;
  height: 320px;
  // background-color: blue;
  margin-top: 40px;
}
</style>