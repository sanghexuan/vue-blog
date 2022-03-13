<template>
  <div class="frame-pege home">
    <header-index></header-index>
    <main class="frame-pege-box">
      <router-view></router-view>
    </main>
    <header-bar></header-bar>
    <user-login></user-login>
    <user-regist></user-regist>
  </div>
</template>

<script>
import HeaderIndex from "../header/index";
import HeaderBar from "../header/header-bar";
import UserLogin from "../user/user-login";
import UserRegist from "../user/user-regist";
export default {
  components: { HeaderBar, HeaderIndex, UserLogin, UserRegist },
  data() {
    return {};
  },
};
</script>
