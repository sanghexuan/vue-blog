<template>
  <div class="header-logo">
    <a class="avatar"> <img class="header-logo-min" :src="imgageUrl" /></a>
  </div>
</template>

<script>
export default {
  name: "header-logo",
  props: {},
  methods: {
    gotoIndex() {
      // this.$router.push({
      //   name: "index",
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.header-logo {
  min-width: 120px;
  height: 100%;
  display: inline-block;
  img {
    height: 100%;
    padding: 10px 0;
  }
  &-max {
    display: block;
  }
  &-min {
    display: none;
  }
}
@media (max-width: 720px) {
  .header-logo {
    min-width: 45px;
    &-max {
      display: none;
    }
    &-min {
      display: block;
    }
  }
}
</style>
