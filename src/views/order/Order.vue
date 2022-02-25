<template>
  <div class="orderitem">
    <div class="inputs">
      <div>
        <span>订单号</span>
        <el-input v-model="dataObj.orderNo" placeholder="订单号"></el-input>
      </div>
      <div>
        <span>收货人</span>
        <el-input v-model="dataObj.consignee" placeholder="收货人"></el-input>
      </div>
      <div>
        <span>手机号</span
        ><el-input v-model="dataObj.phone" placeholder="手机号"></el-input>
      </div>
      <div>
        <span>订单状态</span>
        <template>
          <el-select v-model="dataObj.orderState" placeholder="订单状态">
            <!-- <el-option> </el-option> -->
            <el-option label="已受理" value="已受理"></el-option>
            <el-option label="派送中" value="派送中"></el-option>
            <el-option label="已完成" value="已完成"></el-option>
          </el-select>
        </template>
      </div>
    </div>
    <div class="datas">
      <span>选择时间</span>
      <el-date-picker
        v-model="dataObj.date"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button type="primary" @click="primary()">查询</el-button>
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
import { orderList } from "@/api/order.js";
export default {
  data() {
    return {
      dataObj: {
        orderNo: "",
        consignee: "",
        phone: "",
        orderState: "",
        date: "",
      },
      // 返回数据
      formData: [],

      // 请求数据
      data: {
        currentPage: 1,
        pageSize: 5,
      },
    };
  },
  components: {
    OrderTatle,
    Pager,
  },
  methods: {
    async getorderList() {
      let res = await orderList(this.data);
      // console.log(res.data.total);
      this.$bus.$emit("getordpa", res.data.total);
      this.formData = res.data.data;
      this.$bus.$emit("dataorder", res.data.data);
    },
    // 查询按钮
    primary() {
      //判断是否与时间值
      if (this.dataObj.date) {
        this.dataObj.date = JSON.stringify(this.dataObj.date);
      }
      // 合并对象
      Object.assign(this.data, this.dataObj);
      // 重新渲染订单列表
      this.getorderList();
    },
  },
  created() {
    // 请求订单列表
    this.getorderList();
    this.$bus.$on("ordertypy", (res) => {
      this.data.pageSize = res;
      this.getorderList();
    });
    this.$bus.$on("ordertypt", (res) => {
      this.data.currentPage = res;
      this.getorderList();
    });
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
  min-height: 320px;
  // background-color: blue;
  margin-top: 40px;
}
</style>