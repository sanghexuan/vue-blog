<template>
  <div class="">
    <my-self :personalData="personalData"></my-self>
  </div>
</template>

<script>
import MySelf from "../../components/use/my-self.vue";
export default {
  name: "index",
  components: { MySelf },
  data() {
    return {
      personalData: {
        name: "桑和轩",
        region: "学生",
        type: "华云数据",
        web: "https://github.com/sanghexuan/vue-blog",
        textarea:
          "来自南京的大四学生，就读于盐城工学院，在华云数据公司担任前端实习生。",
      },
    };
  },
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
