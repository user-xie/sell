<template>
  <div>
    <!-- 菜单导航栏 -->
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="bgindex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          unique-opened
          router
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/home">
            <i class="iconfont icon-shouye"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/order">
            <i class="iconfont icon-dingdandingdanmingxishouzhimingxi"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-submenu index="/goods">
            <template slot="title">
              <i class="iconfont icon-shangpin-"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/goodslist">商品列表</el-menu-item>
              <el-menu-item index="/goodsadd">商品添加</el-menu-item>
              <el-menu-item index="/goodstype">商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/shop">
            <i class="iconfont icon-dianpu-xianxing"></i>
            <span slot="title">店铺管理</span>
          </el-menu-item>
          <!--  -->
          <el-submenu index="/users">
            <template slot="title" index="/users">
              <i class="iconfont icon-zhanghao"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userlist">账号列表</el-menu-item>
              <el-menu-item index="/useradd">添加账号</el-menu-item>
              <el-menu-item index="/userpawd">修改密码</el-menu-item>
              <el-menu-item index="/admin">个人中心</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <el-submenu index="/statistics" open="index">
            <template slot="title">
              <i class="iconfont icon-i_5xiaoshoutongji"></i>
              <span>销售统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/goodsstatistics">商品统计</el-menu-item>
              <el-menu-item index="/orderstaistics">订单统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgindex: "/home",
      urls: "",
    };
  },
  watch: {
    "$route.path"(news) {
      this.bgindex = news;
    },
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
  created() {
    this.bgindex = this.$route.path;
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 10px;
}
</style>