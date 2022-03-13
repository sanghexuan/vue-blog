<template>
  <div class="index">
    <article-list></article-list>
    <article-detail></article-detail>
    <user-login></user-login>
    <user-regist></user-regist>
  </div>
</template>

<script>
import ArticleList from "./article-list.vue";
import ArticleDetail from "./article-detail.vue";
import UserLogin from "../user/user-login";
import UserRegist from "../user/user-regist";

export default {
  name: "index",
  components: { ArticleList, ArticleDetail, UserLogin, UserRegist },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.index {
}
</style>
