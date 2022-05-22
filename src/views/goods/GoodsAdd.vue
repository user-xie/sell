<template>
  <div class="useradd">
    <main-title> <span>商品添加</span> </main-title>
    <div>
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="商品名称" class="goodsname">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="formData.category" placeholder="请选择商品分类">
            <el-option
              v-for="(item, index) in goodsType"
              :key="index"
              :label="item.cateName"
              :value="item.cateName"
            ></el-option>
          </el-select>
        </el-form-item>
        <div class="Counter">
          <span>商品价格</span>
          <el-input-number
            v-model="formData.price"
            @change="handleChange"
            :min="0"
          ></el-input-number>
        </div>
        <!-- 上传图片 -->
        <div class="Counter">
          <span>商品图片</span>
          <el-upload
            class="avatar-uploader"
            action="http://47.108.149.141:3000/goods/goods_img_upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>

        <el-form-item label="商品描述">
          <el-input type="textarea" v-model="formData.goodsDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加商品</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { goodsAlltype, goodsAdd } from "@/api/user.js";
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      imageUrl: "",
      formData: {
        name: "",
        category: "",
        price: "",
        imgUrl: "",
        goodsDesc: "",
      },
      goodsType: [],
    };
  },
  methods: {
    // 保存事件
    onSubmit() {
      if (this.formData.name == "" || this.formData.category == "") {
        this.$message({
          message: "请将商品信息输入完整",
          type: "warning",
        });
      } else if (this.formData.price == 0) {
        this.$message({
          message: "商品价格不能为0",
          type: "warning",
        });
      } else {
        // 请求添加接口
        goodsAdd(this.formData).then((res) => {
          // console.log(res);
          if (res.data.code === 0) {
            this.$router.push("/goodslist");
          }
        });
      }
    },
    // 计数器
    handleChange(value) {
      // console.log(this.formData.price);
    },
    // 上传头像文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res, file);
      if (res.code === 0) {
        this.$message({
          message: res.msg,
          type: "success",
        });
        res.imgUrl = res.imgUrl.slice(res.imgUrl.lastIndexOf("/") + 1);
        this.formData.imgUrl = res.imgUrl;
      }
    },
    // 上传文件之前的钩子，参数为上传的文件，若
    beforeAvatarUpload(file) {
      // console.log(file);
    },
  },
  components: {
    MainTitle,
  },
  created() {
    // 进入页面获取所有商品类型
    goodsAlltype().then((res) => {
      this.goodsType = res.data.categories;
      console.log(this.goodsType);
    });
  },
};
</script>

<style lang="less" scoped>
.useradd {
  width: 100%;
  min-height: 400px;
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
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 5px;
  text-align: center;
  border: 1px dashed #e3e3e3;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
/deep/.el-upload--text {
  margin-bottom: 20px;
}
.el-form {
  margin-top: 20px;
}
.el-button--primary {
  margin-bottom: 20px;
}
</style>