<template>
  <div class="header-search">
    <input placeholder="请输入搜索关键词..." />
  </div>
</template>

<script>
export default {
  name: "header-search",
};
</script>

<style lang="less" scoped>
.header-search {
  padding-left: 235px;
  flex: 1;
  min-width: 0;
  display: inline-block;
  text-align: center;
  input {
    border: 1px solid #dac5c5;
    border-radius: 3px;
    font-size: 13px;
    line-height: 32px;
    padding: 0 2px 0 10px;
    outline: none;
    transition: all 0.2s ease;
    background: transparent;
    &:focus {
      cursor: auto;
      border-color: #1e80ff;
    }
  }
}
@media (max-width: 900px) {
  .header-search {
    padding-left: 0;
    flex: 1;
    min-width: 0;
    width: 100%;
    input {
      width: 85%;
    }
  }
}
</style>
