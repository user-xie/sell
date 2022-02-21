<template>
  <div class="userpass">
    <main-title> <span>修改密码</span> </main-title>
    <div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle.vue";

import { userseDitpwd } from "@/api/user.js";
export default {
  components: {
    MainTitle,
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入原密码！"));
      }
      setTimeout(() => {
        // console.log(value);
        let { password } = JSON.parse(localStorage.getItem("user"));
        if (value != password) {
          callback(new Error("原密码输入有误！"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
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
    submitForm(formName) {
      // console.log(formName);
      this.$refs[formName].validate((valid) => {
        // console.log(valid);
        if (valid) {
          // console.log(this.ruleForm);
          let data = {
            newPwd: this.ruleForm.checkPass,
            id: JSON.parse(localStorage.getItem("user")).id,
          };
          // 修改密码接口请求
          userseDitpwd(data).then((res) => {
            // console.log(res);
            let { code, msg } = res.data;
            if (code == 0) {
              this.open2(msg);
              localStorage.removeItem("user");
              setTimeout(() => {
                this.$router.push("/login");
              }, 2000);
            }
          });
        } else {
          // console.log("sp");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.userpass {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.el-input {
  width: 240px;
}
.demo-ruleForm {
  margin-top: 20px;
}
</style>