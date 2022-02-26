<template>
  <div class="index">
    <article-list :messages="messages"></article-list>
    <article-detail></article-detail>
    <user-login></user-login>
  </div>
</template>

<script>
import ArticleList from "./article-list.vue";
import ArticleDetail from "./article-detail.vue";
import UserLogin from "../user/user-login";

export default {
  name: "index",
  components: { ArticleList, ArticleDetail, UserLogin },
  data() {
    return {
      messages: "zifuchuan",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.index {
}
</style>
