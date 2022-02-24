<template>
  <div class="shop">
    <main-title>
      <span>商铺管理</span>
      <el-button slot="butto" type="primary">保存</el-button></main-title
    >
    <!-- 表单 -->
    <div>
      <el-form ref="form" :model="formData" label-position="left">
        <el-form-item label="店铺名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="店铺公告">
          <el-input
            type="textarea"
            v-model="formData.bulletin"
            min-height="'50px'"
          ></el-input>
        </el-form-item>
        <!-- 上传头像 -->
        <el-form-item label="店铺头像">
          <br />
          <el-avatar shape="square" :src="formData.avatar"></el-avatar>
        </el-form-item>
        <!-- 照片墙 -->
        <el-form-item label="店铺图片">
          <br />
          <img
            v-for="(item, index) in formData.pics"
            class="picsimg"
            :key="index"
            :src="item"
            alt=""
          />
          <el-upload
            action="http://localhost:5000/shop/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <!-- 配送费 -->
        <el-form-item label="配送费">
          <el-input v-model="formData.deliveryPrice"></el-input>
        </el-form-item>
        <el-form-item label="配送时间">
          <el-input v-model="formData.deliveryTime"></el-input>
        </el-form-item>
        <el-form-item label="配送描述">
          <el-input v-model="formData.description"></el-input>
        </el-form-item>
        <el-form-item label="店铺评分">
          <el-input v-model="formData.score"></el-input>
        </el-form-item>
        <el-form-item label="销量">
          <el-input v-model="formData.sellCount"></el-input>
        </el-form-item>
        <!-- 活动 -->
        <el-form-item label="活动">
          <el-checkbox-group v-model="formData.supports">
            <el-checkbox label="在线支付满28-5" name="type"></el-checkbox>
            <el-checkbox label="VC无线橙汁全场8折" name="type"></el-checkbox>
            <el-checkbox label="单人精彩套餐" name="type"></el-checkbox>
            <el-checkbox label="特价饮料8折抢购" name="type"></el-checkbox>
            <el-checkbox label="单人特色套餐" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 活动时间 -->
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formData.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="formData.date"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
import { shopInfo, shopUpload } from "@/api/shop.js";
export default {
  data() {
    return {
      formData: {
        id: "",
        name: "dsfsfds",
        bulletin: "",
        avatar: "",
        deliveryPrice: "",
        deliveryTime: "",
        description: "",
        score: "",
        sellCount: "",
        supports: "",
        pics: "",
        date1: "",
        date2: "",
        minPrice: "",
      },
      imageUrl: "",
    };
  },
  components: {
    MainTitle,
  },
  methods: {
    // 照片墙
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    getShoplist() {
      shopInfo().then((res) => {
        // console.log(res);
        if (res.statusText == "OK") {
          this.formData = res.data.data;
          console.log(this.formData);
        }
      });
    },
  },
  created() {
    this.getShoplist();
  },
};
</script>

<style lang="less" scoped>
.shop {
  width: 100%;
  min-height: 500px;
  background-color: #fff;
}
.picsimg {
  margin: 0 10px;
  width: 80px;
}
// 上传头像

/deep/.el-upload--picture-card,
/deep/.el-upload-list__item,
/deep/.el-upload-list__item-actions {
  width: 80px !important;
  height: 80px !important;
  line-height: 80px !important;
}
/deep/.el-textarea__inner {
  min-height: 90px !important;
  width: 60%;
}
/deep/.el-form--label-left {
  padding: 10px 30px;
  .el-input__inner {
    width: 40%;
  }
}
/deep/.el-avatar {
  height: 100px;
  width: 100px;
}
/deep/.el-form-item {
  margin-bottom: 10px;
}
</style>