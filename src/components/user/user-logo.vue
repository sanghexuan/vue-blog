<template>
  <div class="header-logo">
    <el-dropdown size="mini" @command="handleCommand">
      <div data-hover="dropdown">
        <a class="user-logo avatar">
          <img
            v-if="token"
            src="https://upload.jianshu.io/users/upload_avatars/27254820/14951973-dbd6-4551-a30f-51119e9db3c9?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
          />
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
export default {
  name: "user-logo",
  props: { login: Function, doregist: Function },
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
  },
  mounted() {
    this.token = localStorage.getItem("token");
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
    margin: 8px 24px 8px 16px;
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
