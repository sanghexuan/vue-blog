<template>
  <ul class="sidebar-article">
    <li
      class="sidebar-article-item"
      v-for="index in list"
      @click="articleDetails(index)"
      :key="index"
    >
      <h4>{{ index }}</h4>
    </li>
  </ul>
</template>

<script>
import IconFa from "../icon/icon-fa";

export default {
  name: "sidebar-article",
  components: { IconFa },
  data() {
    return {
      list: [
        "javascript基础",
        "git实用操作",
        "正则表达式",
        "react路由笔记",
        "Vue刷新页面四种方法",
      ],
    };
  },
  methods: {
    articleDetails(id) {
      this.$router.push({
        path: "/server/articleDetails/" + id,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.sidebar-article {
  width: 100%;

  &-item {
    padding: 12px 0;
    padding-left: 20px;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px dashed #eee;

    &:last-child {
      border-bottom: 1px dashed transparent;
    }

    h4 {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.2;
      color: #2e3135;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .article-info {
      margin-top: 5px;
      font-size: 13px;
      color: #c2c2c2;
    }
  }
}
</style>
