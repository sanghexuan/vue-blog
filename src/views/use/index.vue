<template>
  <div class="">
    <my-self></my-self>
  </div>
</template>

<script>
import MySelf from "../../components/use/my-self.vue";
export default {
  name: "index",
  components: { MySelf },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
}

@media (max-width: 720px) {
  .index {
  }
}
</style>
