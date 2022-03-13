<template>
  <div class="frame-pege child">
    <main class="frame-pege-box">
      <router-view></router-view>
    </main>
    <header-bar></header-bar>
    <user-login></user-login>
    <user-regist></user-regist>
  </div>
</template>

<script>
import HeaderBar from "../header/header-bar";
import UserLogin from "../user/user-login";
import UserRegist from "../user/user-regist";

export default {
  components: { HeaderBar, UserLogin, UserRegist },
};
</script>
<style lang="less" scoped>
.child {
  width: 100%;
  height: 100%;
  max-width: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  .frame-pege-box {
    margin-top: 0;
    height: calc(100% - 60px);
  }
}
</style>
