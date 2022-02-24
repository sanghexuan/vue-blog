<template>
  <div class="page">
    <header-editor @click="add" :handbook="handbook"></header-editor>
    <markdownEditor class="markdownEditor" v-model="handbook"></markdownEditor>
  </div>
</template>

<script>
import HeaderEditor from "../../components/header/header-editor";
import markdownEditor from "../../components/markdown/markdown-editor";

export default {
  name: "articleEditor",
  components: { HeaderEditor, markdownEditor },
  data() {
    return {
      handbook: "",
    };
  },
  watch: {},
  mounted() {},
  methods: {
    add() {
      this.$emit("add", this.handbook);
    },
  },
};
</script>

<style lang="less" scoped>
.markdownEditor {
  width: 100%;
  height: 100%;
  z-index: 9;
}
</style>
