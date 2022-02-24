<template>
  <div class="index">
    <article-list :messages="messages"></article-list>
    <article-detail></article-detail>
  </div>
</template>

<script>
import ArticleList from "./article-list.vue";
import ArticleDetail from "./article-detail.vue";

export default {
  name: "index",
  components: { ArticleList, ArticleDetail },
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
