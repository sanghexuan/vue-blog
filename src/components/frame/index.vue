<template>
  <div class="frame-pege index">
    <header-index :isUpRoll="isUpRoll"></header-index>
    <nav-child :isUpRoll="isUpRoll"></nav-child>
    <main class="frame-pege-boxi">
      <router-view></router-view>
    </main>
    <header-bar></header-bar>
    <nav-button></nav-button>
    <user-login></user-login>
    <user-regist></user-regist>
  </div>
</template>

<script>
import HeaderIndex from "../header/index";
import HeaderBar from "../header/header-bar";
import NavChild from "../navbar/nav-child";
import { frameMixins } from "./mixins";
import navButton from "../navbar/nav-button";
import UserLogin from "../user/user-login";
import UserRegist from "../user/user-regist";
export default {
  mixins: [frameMixins],
  components: {
    navButton,
    NavChild,
    HeaderBar,
    HeaderIndex,
    UserLogin,
    UserRegist,
  },
  data() {
    return {};
  },

  mounted() {},
};
</script>
<style scoped></style>
