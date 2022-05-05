<template>
  <div class="header-user">
    <!-- 用户头像框 -->
    <user-logo
      :login="login"
      :doregist="doregist"
      :token="token"
      :setToken="setToken"
    ></user-logo>
    <!-- 登陆按钮 -->
    <button class="login" @click="login" style="margin-right: 5px">登陆</button>
    <button class="login" @click="doregist">注册</button>
  </div>
</template>

<script>
import UserLogo from "../user/user-logo";

export default {
  name: "header-user",
  components: { UserLogo },
  data() {
    return {
      token: "",
    };
  },

  methods: {
    setToken(token) {
      this.token = token;
    },
    login() {
      this.$store.commit("changeshowModal");
    },
    doregist() {
      this.$store.commit("changeRegist");
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.header-user {
  margin-right: 15px;
  height: 100%;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    border: 1px solid #007fff;
    background-color: #fff;
    color: #007fff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    font-weight: 500;
    padding: 0 8px;
    cursor: pointer;
    outline: none;
  }
}

@media (max-width: 720px) {
  .login {
    display: none;
  }
  .header-user {
    margin-right: 0;
    margin-left: 30px;
  }
}
</style>
