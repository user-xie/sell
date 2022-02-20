<template>
  <div class="userlist">
    <main-title> <span>账号列表</span> </main-title>
    <!-- 表格 -->
    <div class="tables">
      <list-table> </list-table>
      <!-- // 分页器 -->
      <pager class="pager"> </pager>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
// 表格
import ListTable from "./components/ListTable.vue";
// 分页器
import Pager from "@/components/Pager.vue";
export default {
  data() {
    return {};
  },
  components: {
    MainTitle,
    ListTable,
    Pager,
  },
};
</script>

<style lang="less" scoped>
.userlist {
  width: 100%;
  min-height: 430px;
  background-color: #fff;
}
.tables {
  width: 96%;
  margin: auto;
}
.pager {
  margin-top: 20px;
}
</style>