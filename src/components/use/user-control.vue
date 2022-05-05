<template>
  <div class="user-control">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="name" label="用户"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "user-control",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
