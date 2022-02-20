<template>
  <div class="useradd">
    <main-title> <span>商品添加</span> </main-title>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称" class="goodsname">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="Counter">
          <span>商品价格</span>
          <el-input-number
            v-model="form.num"
            @change="handleChange"
            :min="1"
            :max="1000"
          ></el-input-number>
        </div>
        <!-- 上传图片 -->
        <div class="Counter">
          <span>商品图片</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>

        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加商品</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      imageUrl: "",
      form: {
        name: "",
        region: "",
        num: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // 计数器
    handleChange(value) {
      console.log(value);
    },
    // 上传头像
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  components: {
    MainTitle,
  },
};
</script>

<style lang="less" scoped>
.useradd {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
/deep/.el-textarea__inner {
  width: 320px;
}
.goodsname {
  width: 390px;
}
.Counter {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  margin-bottom: 20px;
  display: flex;
  span {
    margin: 0 12px;
  }
}
// 上传图片
.avatar-uploader .el-upload {
  border: 1px dashed #2b2626;
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
  width: 140px;
  height: 140px;
  line-height: 140px;
  border-radius: 5px;
  text-align: center;
  border: 1px dashed #e3e3e3;
}
.avatar {
  width: 140px;
  height: 140px;
  display: block;
}
/deep/.el-upload--text {
  margin-bottom: 20px;
}
.el-form {
  margin-top: 20px;
}
</style>