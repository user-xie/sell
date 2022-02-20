<template>
  <div class="useradd">
    <main-title> <div>添加账号</div> </main-title>
    <div class="additem">
      <div>
        <span>账号</span>
        <el-input v-model="names"></el-input>
      </div>
      <div>
        <span>密码</span>
        <el-input v-model="passwd"></el-input>
      </div>
      <div>
        <span>用户组</span>
        <el-select v-model="value" placeholder="请选择活动区域">
          <el-option label="超级管理员" value="超级管理员"></el-option>
          <el-option label="普通管理员" value="普通管理员"></el-option>
        </el-select>
      </div>
      <div class="buttons">
        <el-form
          ><el-form-item>
            <el-button type="primary" @click="handleChange">添加</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item></el-form
        >
      </div>
    </div>
  </div>
</template>

<script>
import { userAdd } from "@/api/user.js";
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      names: "",
      passwd: "",
      value: "",
      options: [],
    };
  },
  methods: {
    open2(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "success",
      });
    },
    open4(msg) {
      this.$message.error(msg);
    },
    handleChange() {
      let data = {
        account: this.names,
        password: this.passwd,
        userGroup: this.value,
      };
      console.log(data);
      // 请求添加管理员接口
      userAdd(data).then((res) => {
        console.log(res);
        if (res.data.code == 0) {
          this.open2(res.data.msg);
          this.resetForm();
        } else {
          this.open4(res.data.msg);
        }
      });
    },
    resetForm() {
      this.names = "";
      this.passwd = "";
      this.value = "";
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
  height: 430px;
  background-color: #fff;
  div {
    display: flex;
    span {
      width: 50px;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
    }
  }
}
.additem {
  margin: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  div {
    margin-top: 10px;
  }
}
/deep/.el-input__inner {
  width: 240px;
}
.buttons {
  margin: 10px 50px;
}
</style>