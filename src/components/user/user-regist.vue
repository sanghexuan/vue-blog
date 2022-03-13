<template>
  <div class="user-regist">
    <div class="mask" v-if="this.$store.state.regist"></div>
    <div class="pop" v-if="this.$store.state.regist">
      <span @click="close">x</span>
      <div><h1 class="name">账号注册</h1></div>
      <div class="dropdown-box">
        <h4>账号：</h4>
        <el-input placeholder="请输入账号" v-model="name" clearable></el-input>
      </div>
      <div class="dropdown-box">
        <h4>密码：</h4>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          @input="change($event)"
          show-password
        ></el-input>
      </div>
      <div class="dropdown-box">
        <h4>重复密码：</h4>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          @input="change($event)"
          show-password
        ></el-input>
      </div>
      <div class="btnoutside">
        <el-button :plain="true" type="primary" @click="open">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-regist",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    open() {
      this.$store.commit("changeRegist");
      this.$message("注册成功！");
    },
    close() {
      this.$store.commit("changeRegist");
    },
    // change(e) {
    //   this.$forceUpdate(e);
    // },
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

.btnoutside {
  margin-top: 10px;
  text-align: center;
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
  height: 290px;
  z-index: 2;
  span {
    position: absolute;
    font-size: 22px;
    top: -3px;
    right: 6px;
  }
}
@media (max-width: 720px) {
  .pop {
    left: 25%;
  }
}
</style>
