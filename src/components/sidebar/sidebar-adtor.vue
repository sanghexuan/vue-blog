<template>
  <ul class="sidebar-aditor">
    <li class="tag-item">前端开发</li>
    <li class="tag-item">Java开发</li>
    <li class="tag-item">推荐</li>
    <li class="tag-item">其他</li>
  </ul>
</template>

<script>
export default {
  name: "sidebar-aditor",
};
</script>

<style lang="less" scoped>
.sidebar-aditor {
  width: 100%;
  .tag-item {
    display: inline-block;
    border: 1px dashed #17b5c5;
    padding: 5px 10px;
    margin: 4px 2px;
  }
}
</style>
