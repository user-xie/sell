<template>
  <div class="shop">
    <main-title>
      <span>商铺管理</span>
      <el-button slot="butto" type="primary" @click="editShop()" v-if="!isshow"
        >我要编辑</el-button
      >
      <el-button slot="butto" type="success" @click="saveShop()" v-else
        >我要保存</el-button
      >
    </main-title>
    <!-- 表单 -->
    <div v-if="formData != null">
      <el-form
        ref="form"
        label-width="80px"
        :model="formData"
        label-position="left"
      >
        <el-form-item label="店铺名称">
          <p v-html="formData.name" v-show="!isshow"></p>
          <el-input v-model="formData.name" v-show="isshow"></el-input>
        </el-form-item>
        <el-form-item label="店铺公告">
          <p v-html="formData.bulletin" v-show="!isshow"></p>

          <el-input
            v-show="isshow"
            type="textarea"
            v-model="formData.bulletin"
            min-height="'50px'"
          ></el-input>
        </el-form-item>
        <!-- 上传头像 -->
        <el-form-item label="店铺头像">
          <el-upload
            :title="isshow ? '点击更换头像' : '点击编辑按钮更换头像'"
            :disabled="!isshow"
            class="avatar-uploader"
            action="http://localhost:5000/shop/upload"
            :show-file-list="false"
            :on-success="handleAvatarSucces"
          >
            <img v-if="avatar" :src="avatar" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <!-- 照片墙 -->
        <el-form-item label="店铺图片">
          <br />
          <el-upload
            :file-list="imgslist"
            action="http://localhost:5000/shop/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="getlistimg"
          >
            <i class="el-icon-plus"></i>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-upload>
        </el-form-item>
        <!-- 配送费 -->
        <el-form-item label="配送费">
          <p v-html="formData.deliveryPrice" v-show="!isshow"></p>

          <el-input v-model="formData.deliveryPrice" v-show="isshow"></el-input>
        </el-form-item>
        <el-form-item label="配送时间">
          <p v-html="formData.deliveryTime" v-show="!isshow"></p>

          <el-input v-model="formData.deliveryTime" v-show="isshow"></el-input>
        </el-form-item>
        <el-form-item label="配送描述">
          <p v-html="formData.description" v-show="!isshow"></p>

          <el-input v-model="formData.description" v-show="isshow"></el-input>
        </el-form-item>
        <el-form-item label="店铺评分">
          <p v-html="formData.score" v-show="!isshow"></p>

          <el-input v-model="formData.score" v-show="isshow"></el-input>
        </el-form-item>
        <el-form-item label="销量">
          <p v-html="formData.sellCount" v-show="!isshow"></p>

          <el-input v-model="formData.sellCount" v-show="isshow"></el-input>
        </el-form-item>
        <!-- 活动 -->
        <el-form-item label="活动">
          <el-checkbox-group v-model="formData.supports">
            <el-checkbox label="在线支付满28-5" name="supports"></el-checkbox>
            <el-checkbox
              label="VC无限橙果汁全场8折"
              name="supports"
            ></el-checkbox>
            <el-checkbox label="单人精彩套餐" name="supports"></el-checkbox>
            <el-checkbox label="特价饮料8折抢购" name="supports"></el-checkbox>
            <el-checkbox label="单人特色套餐" name="supports"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 活动时间 -->
        <el-form-item label="活动时间">
          <el-time-picker
            is-range
            v-model="formData.date"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </el-time-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";
import { shopInfo, shopEdit } from "@/api/shop.js";
// import { getflieName } from "@/utils/common.js";
export default {
  data() {
    return {
      formData: null,
      // 头像
      avatar: "",
      isshow: false,
      imgslist: [],
      baseUrl: "http://localhost:5000",
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  components: {
    MainTitle,
  },
  methods: {
    // 单个头像上传
    handleAvatarSucces(res, file) {
      // console.log(res, file);
      if (res.code == 0) {
        this.avatar = this.baseUrl + res.imgUrl;
        this.formData.avatar = this.avatar;
      }
    },
    // 保存修改信息按钮
    saveShop() {
      let data = this.formData;
      let { avatar, date, pics, supports } = data;
      // 截取图片后缀名
      data.avatar = avatar.substr(avatar.lastIndexOf("/") + 1);
      data.date = JSON.stringify(date);
      data.pics = pics.map((item) => {
        return item.substr(item.lastIndexOf("/") + 1);
      });
      data.pics = JSON.stringify(data.pics);
      data.supports = JSON.stringify(supports);
      // 请求修改接口;
      shopEdit(data).then((res) => {
        // console.log(res);
        this.isshow = false;
      });
      this.getShoplist();
      console.log(data);
    },
    // 照片墙删除事件
    handleRemove(file, fileList) {
      console.log(file, fileList);
      fileList = fileList.map((item) => {
        return "/upload/shop/" + item.name;
      });
      this.formData.pics = fileList;
      // console.log(this.formData);
    },
    // 上传成功的钩子
    getlistimg(res, file) {
      // console.log(res);
      this.formData.pics.push(res.imgUrl);
      console.log(this.formData);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 获取店铺信息函数
    getShoplist() {
      shopInfo().then((res) => {
        // console.log(res);
        if (res.statusText == "OK") {
          let { avatar, pics } = res.data.data;
          this.avatar = this.baseUrl + avatar;
          this.formData = res.data.data;
          this.imgslist = pics.map((item) => {
            return {
              name: item.substr(item.lastIndexOf("/") + 1),
              url: this.baseUrl + item,
            };
          });
          // console.log(this.imgslist);
        }
      });
    },
    // 改变编辑模式
    editShop() {
      this.isshow = !this.isshow;
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
/deep/.el-dialog {
  width: 400px;
}
/deep/.el-form-item {
  margin-bottom: 10px;
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
  width: 100px;
  height: 100px;
  line-height: 10px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>