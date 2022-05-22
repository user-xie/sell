<template>
  <div id="layour">
    <div class="lay_left">
      <!-- 菜单导航栏 -->
      <div class="nav_title">
        <span>外卖商家中心</span>
      </div>
      <nav-list> </nav-list>
    </div>
    <div class="lay-rihgt">
      <div class="top_title">
        <nav-title> </nav-title>
      </div>
      <div class="mains">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavList from "./components/NavList.vue";
import NavTitle from "@/components/NavTitle.vue";

export default {
  data() {
    return {};
  },
  components: {
    NavList,
    NavTitle,
  },
};
</script>

<style lang="less" scoped>
#layour {
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  overflow: hidden;
}
.lay_left {
  width: 15%;
  height: 100%;
  background-color: #304156;
  overflow: hidden;
}
.lay-rihgt {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #eaecef;
  .top_title {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    // display: flex;
  }
  .mains {
    flex: 1;
    // background-color: #ffffff;
    // border: 1px solid red;
    overflow-y: scroll;
    margin: 15px;
  }
  // 取消滚动条样式
  .mains::-webkit-scrollbar {
    display: none;
  }
}
.nav_title {
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  color: #ffffff;
  font-size: 20px;
}
</style>