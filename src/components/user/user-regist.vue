<template>
  <div class="user-regist">
    <div class="mask" v-if="this.$store.state.regist"></div>
    <div class="pop" v-if="this.$store.state.regist">
      <div class="header">
        <h3>注册账号</h3>
        <span @click="close">x</span>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号">
          <el-input
            placeholder="请输入账号"
            v-model="ruleForm.name"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input
            v-model="ruleForm.newPwd"
            placeholder="请输入密码"
            show-password
            size="small"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input
            v-model="ruleForm.confirmPwd"
            placeholder="请输入密码"
            show-password
            size="small"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            @click="submitForm(ruleForm)"
            class="button"
            >确定</el-button
          >
          <el-button @click="resetForm(ruleForm)" class="button"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user-regist",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.confirmPwd !== "") {
          this.$refs.ruleForm.validateField("confirmPwd");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      changePwdDialog: false, //修改密码弹框
      ruleForm: {
        name: "",
        newPwd: "",
        confirmPwd: "",
      },

      rules: {
        newPwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        confirmPwd: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "blur", required: true },
        ],
      },
    };
  },
  methods: {
    open() {
      this.$store.commit("changeRegist");
    },
    close() {
      this.$store.commit("changeRegist");
    },

    submitForm(ruleForm) {
      this.loading = true;
      axios({
        method: "post",
        url: "https://blog-maomao.herokuapp.com/api/users",
        headers: { "content-type": "application/json" },
        data: {
          user: {
            email: ruleForm.name,
            password: ruleForm.newPwd,
          },
        },
      })
        .then(() => {
          this.$message("注册成功！");
          this.loading = false;
        })
        .catch((err) => {
          this.$message(err);
        });
    },
    resetForm(ruleForm) {
      ruleForm.name = "";
      ruleForm.newPwd = "";
      ruleForm.confirmPwd = "";
    },
  },
};
</script>

<style lang="less" scoped>
.name {
  font-size: 1rem;
  margin: 35px 0 12px 10px;
}
.dropdown-box {
  padding: 0 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  h4 {
    font-size: 12px;
    white-space: nowrap;
    // width: 50px;
  }
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;
  position: fixed;
  top: 36%;
  left: 40%;
  width: 350px;
  height: 290px;
  z-index: 2;
  .header {
    margin: 10px 0;
    padding: 0 10px;
    position: relative;
    height: 24px;
    h3 {
      display: inline-block;
    }
    span {
      top: -6px;
      position: absolute;
      right: 13px;
      font-size: 21px;
    }
  }
  .el-form {
    padding-right: 30px;
    .el-form-item__label {
      width: 20px;
    }
    .el-form-item__content {
      margin-left: 20px;
    }
  }
}
@media (max-width: 720px) {
  .pop {
    left: 25%;
  }
}
@media (max-width: 390px) {
  .pop {
    left: 5%;
  }
}
</style>
