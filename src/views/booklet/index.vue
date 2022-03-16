<template>
  <div class="page">
    <div class="page-list">
      <booklet-list :booklist="booklist"></booklet-list>
    </div>
    <div class="page-sidebarx" id="sidebar">
      <sidebar-box title="小册标签" icon="tags" color="red">
        <sidebar-book slot="list"></sidebar-book>
      </sidebar-box>
    </div>
  </div>
</template>

<script>
import SidebarBox from "../../components/sidebar/sidebar-box";
import SidebarBook from "../../components/sidebar/sidebar-book.vue";
import BookletList from "../../components/booklet/booklet-list";
import booklistapi from "../../dictionary/booklist";
export default {
  name: "index",
  data() {
    return {
      booklist: [],
    };
  },
  components: { BookletList, SidebarBook, SidebarBox },
  mounted() {
    this.booklist = booklistapi();
  },
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less"></style>
