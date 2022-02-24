<template>
  <a class="user-logo">
    <img
      src="https://upload.jianshu.io/users/upload_avatars/27254820/14951973-dbd6-4551-a30f-51119e9db3c9?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
    />
  </a>
</template>

<script>
export default {
  name: "user-logo",
};
</script>

<style lang="less" scoped>
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
</style>
