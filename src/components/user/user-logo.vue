<template>
  <div class="header-logo">
    <el-dropdown size="mini" @command="handleCommand">
      <div data-hover="dropdown">
        <a class="user-logo avatar">
          <img v-if="token" :src="imgageUrl" />
        </a>
      </div>
      <el-dropdown-menu slot="dropdown" class="dropdown-menua">
        <el-dropdown-item command="a">我的主页</el-dropdown-item>
        <li class="moblie">
          <el-dropdown-item command="b">登陆</el-dropdown-item>
        </li>
        <li class="moblie">
          <el-dropdown-item command="c">注册</el-dropdown-item>
        </li>
        <el-dropdown-item command="d">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import Identicon from "identicon.js";

export default {
  name: "user-logo",
  props: { login: Function, doregist: Function, src: { type: String } },
  data() {
    return {
      token: "",
    };
  },

  watch: {
    "$store.state.token"(newVal) {
      this.token = newVal;
    },
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          this.routechange();
          break;
        case "b":
          this.login();
          break;
        case "c":
          this.doregist();
          break;
        case "d":
          this.clearToken();
          break;
      }
    },
    routechange() {
      this.$router.push({
        name: "use",
      });
    },
    clearToken() {
      if (!this.token) {
        this.$message("已经登出 请不要重复操作！");
      } else {
        localStorage.removeItem("token");
        this.$message("登出成功！");
        this.token = "";
        this.$store.commit("changeToken", this.token);
        // this.reload();
      }
    },
    getRandomheader() {
      let hash = md5(Math.random());
      let data = new Identicon(hash, 420).toString();
      this.imgageUrl =
        "https://img-blog.csdnimg.cn/2022010611223663237.png" + data;
      let options = {
        foreground: [0, 0, 0, 255], // rgba black
        background: [255, 255, 255, 255], // rgba white
        margin: 0.2, // 20% margin
        size: 100, // 420px square
        format: "svg", // use SVG instead of PNG
      };
      let data1 = new Identicon(hash, options).toString();
      this.imgageUrl = "data:image/svg+xml;base64," + data1;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.getRandomheader();
  },
};
</script>

<style lang="less" scoped>
.header-logo {
  float: right;
  height: 100%;

  .avatar {
    position: relative;
    width: 40px;
    height: 40px;
    margin: 8px 16px 8px 0;
  }
  .user-logo {
    position: relative;
    width: 40px;
    height: 40px;
    display: block;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }

  .dropdown-menua {
    margin-top: 10px;
    text-align: left;
    display: none;
    background-color: #fff;
    border-radius: 5px;
    li {
      list-style: none;
      padding: 0 10px;
    }
  }
}
.moblie {
  display: none;
}

@media (max-width: 720px) {
  .moblie {
    display: block;
  }
}
</style>
