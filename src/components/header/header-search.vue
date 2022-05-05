<template>
  <div class="header-search">
    <el-input
      placeholder="请输入内容"
      v-model="input4"
      size="small"
      prefix-icon="el-icon-search"
      class="search"
      @keyup.enter.native="searchEnter"
    >
    </el-input>
    <button class="addArticle" @click="articleEditor">写文章</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "header-search",
  data() {
    return {
      input4: "",
      articles: [],
    };
  },
  methods: {
    articleEditor() {
      this.$router.push({
        name: "articleEditor",
      });
    },
    searchEnter() {
      axios({
        method: "get",
        url: `https://blog-maomao.herokuapp.com/api/articles?name=${this.input4}
`,
        headers: { "content-type": "application/json" },
      }).then((res) => {
        this.articles = res.data.articles;
        this.handleArticle(this.articles);
      });
    },
    handleArticle(data) {
      this.$store.commit("changeairtitle", data);
    },
  },
};
</script>

<style lang="less" scoped>
.header-search {
  position: relative;
  margin: 0 3px;
  :after {
    position: absolute;
    top: -5px;
    left: 5px;
  }
  .search {
    width: auto;
    margin-right: 5px;
  }

  .addArticle {
    color: #fff;
    border: 1px solid #007fff;
    background-color: #1e80ff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    padding: 0 8px;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
  }
}
@media (max-width: 900px) {
  .header-search {
  }
}
</style>
