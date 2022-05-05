<template>
  <div class="page">
    <div class="page-list">
      <!-- 标题以及文章显示 -->
      <article-detail :data="data"></article-detail>
      <!-- 评论 -->
      <article-comment></article-comment>
    </div>
    <div class="page-sidebarx" id="sidebar">
      <sidebar-box title="关于作者" icon="tags" color="red">
        <sidebar-user slot="list"></sidebar-user>
      </sidebar-box>
      <sidebar-box title="作者文章推荐" icon="tags" color="red">
        <sidebar-article slot="list"></sidebar-article>
      </sidebar-box>
      <nav-button></nav-button>
    </div>

    <nav-article></nav-article>
  </div>
</template>

<script>
import ArticleDetail from "../../components/article/article-detail";
import SidebarBox from "../../components/sidebar/sidebar-box";
import SidebarTags from "../../components/sidebar/sidebar-tags";
import ArticleComment from "../../components/article/article-comment";
import SidebarUser from "../../components/sidebar/sidebar-user";
import SidebarArticle from "../../components/sidebar/sidebar-article";
import ArticleList from "../../components/article/article-list";
import NavArticle from "../../components/navbar/nav-article";
import NavButton from "../../components/navbar/nav-button.vue";
import axios from "axios";

export default {
  name: "articleDetails",
  components: {
    NavArticle,
    ArticleList,
    SidebarArticle,
    SidebarUser,
    ArticleComment,
    ArticleDetail,
    SidebarTags,
    SidebarBox,
    NavButton,
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem("books")).reverse()[
      this.$route.params.id
    ];
    axios({
      method: "get",
      url: "https://blog-maomao.herokuapp.com/api/articles",
    })
      .then((res) => {
        let articleWord = res.data.articles.reverse();
        this.data = articleWord[this.$route.params.id];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style scoped lang="less"></style>
