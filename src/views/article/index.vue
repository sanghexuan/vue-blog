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
        <sidebar-aditor slot="list"></sidebar-aditor>
      </sidebar-box>
      <!-- <sidebar-box title="日历" icon="tags">
        <sidebar-userlist slot="list"></sidebar-userlist>
      </sidebar-box> -->
      <el-calendar v-model="value" class="aa"> </el-calendar>
    </div>
  </div>
</template>

<script>
import ArticleList from "../../components/article/article-list";
import SidebarBox from "../../components/sidebar/sidebar-box";
import SidebarAditor from "../../components/sidebar/sidebar-adtor.vue";
import SidebarUserlist from "../../components/sidebar/sidebar-userlist";

export default {
  name: "index",
  components: { SidebarUserlist, SidebarAditor, SidebarBox, ArticleList },
  data() {
    return {
      articleDate: "",
      books: [],
      value: new Date(),
    };
  },
  // 挂载的时候初始数据也要获取
  mounted() {
    // 这步只是在挂载的时候拿到他的值
    this.articleDate = this.$route.params.classify;
  },
  methods: {},
  // 数据变化的时候监听他的数据变化
  watch: {
    $route(to, from) {
      // 这步只是在他数据变化的时候拿到他的值
      let routename = to.params.classify;
      this.articleDate = routename;
    },
  },
};
</script>

<style scoped lang="less">
.page-sidebar {
  width: 270px;
  right: -28px;
}
</style>
