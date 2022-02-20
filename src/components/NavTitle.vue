<template>
  <div class="tit_box">
    <div id="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(item, index) in tites"
          :key="index"
          :to="routes[0].path"
          >{{ item }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="">
      <div>
        <span>欢迎你,{{ name }}</span>
      </div>
      <div class="logo_img">
        <img :src="urlimg" @click="admintop()" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { accountinfo } from "@/api/user.js";

export default {
  data() {
    return {
      urls: "",
      tites: [],
      routes: [],
      user: JSON.parse(localStorage.getItem("user")),
      name: "",
      urlimg: "@/assets/imgs/toplogo.png",
    };
  },
  methods: {
    admintop() {
      this.$router.push("/admin");
    },
  },
  watch: {
    "$route.path"(news) {
      this.tites = this.$route.name;
      this.routes = this.$route.matched;
    },
  },
  created() {
    this.tites = this.$route.name;
    this.routes = this.$route.matched;
    let data = {
      id: this.user.id,
    };
    accountinfo(data).then((res) => {
      console.log(res);
      let { account, imgUrl } = res.data.accountInfo;
      this.name = account;
      this.urlimg = imgUrl;
    });
  },
};
</script>

<style lang="less" scoped>
#nav {
  .soye {
    font-weight: bold;
  }
  span {
    color: #a7a8ab;
    margin-left: 5px;
  }
}
.tit_box {
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
}
.logo_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>