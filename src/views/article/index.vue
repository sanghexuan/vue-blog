<template>
  <div class="page">
    <!-- 左边栏 -->
    <div class="page-list">
      <!-- 传入props 数据给推荐 前端开发 java开发 -->
      <article-list :articleDate="articleDate"></article-list>
    </div>
    <!-- 右边栏 -->
    <div class="page-sidebar" id="sidebar">
      <sidebar-box title="文章标签" icon="tags" color="red">
        <sidebar-tags slot="list"></sidebar-tags>
      </sidebar-box>
      <sidebar-box title="作者榜" icon="tags">
        <sidebar-userlist slot="list"></sidebar-userlist>
      </sidebar-box>
    </div>
  </div>
</template>

<script>
import ArticleList from "../../components/article/article-list";
import SidebarBox from "../../components/sidebar/sidebar-box";
import SidebarTags from "../../components/sidebar/sidebar-tags";
import SidebarUserlist from "../../components/sidebar/sidebar-userlist";

export default {
  name: "index",
  components: { SidebarUserlist, SidebarTags, SidebarBox, ArticleList },
  data() {
    return {
      articleDate: "",
    };
  },
  mounted() {},
  methods: {},
  watch: {
    $route(to, from) {
      let routename = to.params.classify;
      this.articleDate = routename;
    },
  },
};
</script>

<style scoped lang="less"></style>
