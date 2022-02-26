<template>
  <div class="frame-pege index">
    <header-index :isUpRoll="isUpRoll"></header-index>
    <nav-child :isUpRoll="isUpRoll"></nav-child>
    <main class="frame-pege-boxi">
      <router-view></router-view>
    </main>
    <header-bar></header-bar>
    <nav-button></nav-button>
    <div>
      <div
        class="mask"
        v-if="this.$store.state.showModal"
        @click="changedata"
      ></div>
      <div class="pop" v-if="this.$store.state.showModal">
        <div><h1 class="name">账号登录</h1></div>
        <div class="dropdown-box">
          <h4>账号：</h4>
          <input type="text" />
        </div>
        <div class="dropdown-box">
          <h4>密码：</h4>
          <input type="password" />
        </div>
        <div class="btnoutside">
          <button @click="login" class="btn">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderIndex from "../header/index";
import HeaderBar from "../header/header-bar";
import NavChild from "../navbar/nav-child";
import { frameMixins } from "./mixins";
import navButton from "../navbar/nav-button";

export default {
  mixins: [frameMixins],
  components: { navButton, NavChild, HeaderBar, HeaderIndex },
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.commit("changeshowModal");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.name {
  font-size: 1rem;
  margin: 35px 0 12px 1rem;
}
.dropdown-box {
  padding: 0 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.dropdown-box input {
  width: 80%;
  height: 36px;
  font-size: 15px;
  font-weight: 500;
}
.dropdown-box.focus {
  border-color: #007fff;
}
.btnoutside {
  padding: 0 20px;
}
.btn {
  width: 100%;
  background-color: #007fff;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  height: 36px;
  color: #fff;
  margin-top: 5px;
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
  left: 42%;
  width: 300px;
  height: 250px;
  z-index: 2;
}
@media (max-width: 720px) {
  .pop {
    left: 25%;
  }
}
</style>
