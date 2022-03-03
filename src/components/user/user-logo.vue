<template>
  <div class="header-logo" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div data-hover="dropdown">
      <a class="user-logo avatar">
        <img
          src="https://upload.jianshu.io/users/upload_avatars/27254820/14951973-dbd6-4551-a30f-51119e9db3c9?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
        />
      </a>
    </div>
    <ul class="dropdown-menua" :style="active">
      <li @click="routechange">
        <a><i></i><span>我的主页</span></a>
      </li>

      <li>
        <a><i></i><span>退出</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "user-logo",
  data() {
    return {
      active: "",
    };
  },
  methods: {
    mouseOver() {
      this.active = "display: block";
    },
    mouseLeave() {
      this.active = "";
    },
    routechange() {
      this.$router.push({
        name: "use",
      });
    },
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
</style>
