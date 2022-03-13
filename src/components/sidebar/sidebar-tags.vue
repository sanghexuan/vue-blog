<template>
  <ul class="sidebar-tags">
    <li class="tag-item">JS</li>
    <li class="tag-item">HTML</li>
    <li class="tag-item">CSS</li>
    <li class="tag-item">PC</li>
    <li class="tag-item">charts</li>
    <li class="tag-item">Node</li>
    <li class="tag-item">Vue</li>
    <li class="tag-item">React</li>
    <li class="tag-item">Angula</li>
    <li class="tag-item">SVG</li>
    <li class="tag-item">小程序</li>
    <li class="tag-item">UI组件库</li>
    <li class="tag-item">图标库</li>
    <li class="tag-item">技术站点</li>
  </ul>
</template>

<script>
export default {
  name: "sidebar-tags",
};
</script>

<style lang="less" scoped>
.sidebar-tags {
  width: 100%;
  .tag-item {
    display: inline-block;
    border: 1px dashed #17b5c5;
    padding: 5px 10px;
    margin: 4px 2px;
  }
}
</style>
