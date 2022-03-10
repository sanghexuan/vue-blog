<template>
  <div class="header-search">
    <el-input placeholder="请输入内容" v-model="input4">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "header-search",
  data() {
    return {
      input4: "",
    };
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
}
// @media (max-width: 900px) {
//   .header-search {
//     padding-left: 0;
//     flex: 1;
//     min-width: 0;
//     width: 100%;
//     input {
//       width: 85%;
//     }
//   }
// }
</style>
