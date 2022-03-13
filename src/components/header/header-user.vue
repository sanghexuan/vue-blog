<template>
  <div class="header-user">
    <button class="addArticle" @click="articleEditor">写文章</button>
    <!-- 用户头像框 -->
    <user-logo></user-logo>
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

  methods: {
    articleEditor() {
      this.$router.push({
        name: "articleEditor",
      });
    },
    login() {
      this.$store.commit("changeshowModal");
    },
    doregist() {
      this.$store.commit("changeRegist");
    },
  },
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

  .addArticle {
    color: #fff;
    border: 1px solid #007fff;
    background-color: #1e80ff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    padding: 0 8px;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
  }
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
  .header-user {
    display: none;
  }
}
</style>
