<template>
  <div class="page">
    <div class="page-list">
      <booklet-detail></booklet-detail>
    </div>
  </div>
</template>

<script>
import BookletDetail from "../../components/booklet/booklet-detail";

export default {
  name: "bookDetail",
  data() {
    return {};
  },
  components: { BookletDetail },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less">
.page-list {
  width: 100%;
  margin-right: 0;
}
</style>
