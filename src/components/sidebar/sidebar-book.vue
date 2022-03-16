<template>
  <ul class="sidebar-book">
    <li class="tag-item">HTML</li>
    <li class="tag-item">CSS</li>
    <li class="tag-item">JavaScript</li>
    <li class="tag-item">JavaScript高级</li>
  </ul>
</template>

<script>
export default {
  name: "sidebar-book",
};
</script>

<style lang="less" scoped>
.sidebar-book {
  width: 100%;
  .tag-item {
    display: inline-block;
    border: 1px dashed #17b5c5;
    padding: 5px 10px;
    margin: 4px 2px;
  }
}
</style>
