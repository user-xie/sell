<template>
  <div id="alls">
    <div class="login">
      <p class="titles">系统登录</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div>
          <el-form-item prop="account">
            <el-input
              placeholder="账号"
              prefix-icon="iconfont icon-zhanghao"
              v-model="ruleForm.account"
            >
            </el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              v-model="ruleForm.password"
              prefix-icon="iconfont icon-ai-password"
              :type="cheak ? 'text' : 'password'"
            >
              <i
                slot="suffix"
                class="iconfont"
                :class="cheak ? 'icon-zhengkaiyanjing4' : 'icon-yanjing-biyan'"
                @click="geticon()"
              >
              </i>
            </el-input>
          </el-form-item>
        </div>
        <div>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { checkLogin } from "@/api/user.js";
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 5,
            max: 18,
            message: "长度在 5到 18 个字符",
            trigger: "blur",
          },
        ],
      },
      cheak: false,
    };
  },
  methods: {
    geticon() {
      this.cheak = !this.cheak;
    },
    // 登录成功提示
    open2(msg) {
      this.$message({
        showClose: true,
        message: msg,
      });
    },
    open4(msg) {
      this.$message.error(msg);
    },
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          checkLogin(this.ruleForm).then((res) => {
            let { code, id, msg, token, role } = res.data;
            if (code == 0) {
              this.open2(msg);
              localStorage.setItem(
                "user",
                JSON.stringify({
                  zhanghao: this.ruleForm.account,
                  password: this.ruleForm.password,
                  id,
                  token,
                  role,
                })
              );
              this.$router.push("/home");
            } else if (code == 1) {
              this.open4(msg);
            }
          });
        }
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      this.ruleForm.account = user.zhanghao;
      this.ruleForm.password = user.password;
    }
  },
};
</script>

<style lang="less" scoped>
#alls {
  width: 100%;
  background-color: #2d3a4b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    width: 400px;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    div {
      margin: 10px 0;
    }
  }
}

.titles {
  color: #fff;
}
.iconfont {
  line-height: 40px;
}
.el-button--primary {
  width: 100%;
  margin-top: 10px;
}
/deep/.el-form-item__content {
  margin-left: -0px !important;
}
/deep/.el-input__inner {
  background: transparent;
  color: #fff;
}
</style>