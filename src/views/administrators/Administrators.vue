<template>
  <div class="admin">
    <main-title> <div>管理员信息</div> </main-title>
    <p><span>管理员ID:</span> {{ datas.id }}</p>
    <el-divider></el-divider>
    <p><span>账号名:</span>{{ datas.account }}</p>

    <el-divider></el-divider>

    <p><span>用户组:</span>{{ datas.userGroup }}</p>

    <el-divider></el-divider>
    <p><span>创建时间:</span>{{ datas.ctime }}</p>
    <el-divider></el-divider>
    <p class="userimg">
      <span>管理员头像:</span>
      <el-upload
        class="avatar-uploader"
        :action="'http://localhost:5000/users/avatar_upload?id=' + id"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </p>
  </div>
</template>

<script>
import { accountinfo } from "@/api/user.js";
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      baseUrl: "http://localhost:5000",
      id: JSON.parse(localStorage.getItem("user")).id,
      imageUrl: "",
      datas: [],
    };
  },
  components: {
    MainTitle,
  },
  methods: {
    // 文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
      // console.log(res, file);
      if (res.code === 0) {
        this.$message({
          message: "头像修改成功!",
          type: "success",
        });
        this.imageUrl = this.baseUrl + res.imgUrl;
      }
    },
    // 上传文件之前的钩子，参数为上传的文件
    beforeAvatarUpload(file) {
      // 通过组件组件传值更改nav头像
      this.$bus.$emit("changeimg");
    },
  },
  // 进入页面请求接口
  created() {
    accountinfo({ id: this.id }).then((res) => {
      // console.log(res);
      if (res.statusText == "OK") {
        this.datas = res.data.accountInfo;
        // console.log(this.datas);
        this.imageUrl = res.data.accountInfo.imgUrl;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.admin {
  width: 100%;
  height: 400px;
  background: #fff;
  // text-align: center;
  color: #919192;
}
p {
  margin: 20px;

  span {
    margin-right: 20px;
    font-weight: bold;
  }
}
.el-divider--horizontal {
  margin: 20px auto;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  border: 1px dashed #d9d9d9;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  line-height: 100px;
  display: block;
}
.userimg {
  display: flex;
  align-items: center;
}
</style>