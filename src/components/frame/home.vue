<template>
  <div class="frame-pege home">
    <header-index></header-index>
    <main class="frame-pege-box">
      <router-view></router-view>
    </main>
    <header-bar></header-bar>
    <user-login></user-login>
  </div>
</template>

<script>
import HeaderIndex from "../header/index";
import HeaderBar from "../header/header-bar";
import UserLogin from "../user/user-login";
export default {
  components: { HeaderBar, HeaderIndex, UserLogin },
  data() {
    return {};
  },
};
</script>
