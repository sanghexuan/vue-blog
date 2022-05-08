<template>
  <div class="page">
    <header-editor
      :titleData="titleData"
      :typeData="typeData"
      :handbook="handbook"
    ></header-editor>
    <markdownEditor
      class="markdownEditor"
      v-model="bodyData"
      @change="
        (value) => {
          bodychange(value);
        }
      "
    ></markdownEditor>
  </div>
</template>

<script>
import HeaderEditor from "../../components/header/header-editor";
import markdownEditor from "../../components/markdown/markdown-editor";
import axios from "axios";
import { Loading } from "element-ui";

export default {
  name: "articleEditor",
  components: { HeaderEditor, markdownEditor },
  data() {
    return {
      handbook: "",
      titleData: "",
      typeData: "",
      bodyData: "",
      num: 0,
    };
  },
  watch: {},
  mounted() {
    let string = this.$route.fullPath;
    this.num = string.split("=")[1];
    Loading.service();
    axios({
      method: "get",
      url: "https://blog-maomao.herokuapp.com/api/articles",
    })
      .then((res) => {
        let loadingInstance = Loading.service();
        this.$nextTick(() => {
          loadingInstance.close();
        });
        let articleWord = res.data.articles.reverse();
        this.titleData = articleWord[this.num].title;
        this.typeData = articleWord[this.num].tagList[0];
        this.bodyData = articleWord[this.num].body;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    bodychange(value) {
      this.handbook = value;
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.markdownEditor {
  width: 100%;
  height: 100%;
  z-index: 9;
}
</style>
