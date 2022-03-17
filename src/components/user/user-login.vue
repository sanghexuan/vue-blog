<template>
  <div class="user-login">
    <div class="mask" v-if="this.$store.state.showModal"></div>
    <div class="pop" v-if="this.$store.state.showModal">
      <span @click="close">x</span>
      <div><h1 class="name">账号登录</h1></div>
      <div class="dropdown-box">
        <h4>账号：</h4>
        <el-input placeholder="请输入账号" v-model="name" clearable></el-input>
      </div>
      <div class="dropdown-box">
        <h4>密码：</h4>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="btnoutside">
        <el-button :plain="true" type="primary" @click="open">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user-login",
  data() {
    return {
      name: "",
      password: "",
      token: "",
    };
  },
  methods: {
    open() {
      axios({
        method: "post",
        url: "https://blog-maomao.herokuapp.com/api/users/login",
        headers: { "content-type": "application/json" },
        data: {
          user: {
            email: this.name,
            password: this.password,
          },
        },
      })
        .then((res) => {
          this.$message("登陆成功！");
          this.token = res.data.user.token;
          localStorage.setItem("token", this.token);
        })
        .catch((err) => {
          this.$message("登陆失败，请校验账号和密码！");
          console.log(err.response.data);
        });

      this.$store.commit("changeshowModal");
    },
    close() {
      this.$store.commit("changeshowModal");
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
    width: 50px;
  }
}

.btnoutside {
  margin-top: 25px;
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
  left: 40%;
  width: 330px;
  height: 250px;
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
@media (max-width: 390px) {
  .pop {
    left: 10%;
  }
}
</style>
