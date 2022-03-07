<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import {} from "view-design";

export default {
  name: "app",
  components: {},
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      indexModal: false,
      isRouterAlive: true,
    };
  },
  mounted() {
    this.checkIsShowOnece();
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    checkIsShowOnece() {
      let indexModal = sessionStorage.getItem("indexModal");
      if (!indexModal && indexModal != "yes") {
        this.indexModal = true;
      } else {
        this.indexModal = false;
      }
    },
    yesIKown() {
      sessionStorage.setItem("indexModal", "yes");
      this.indexModal = false;
    },
  },
};
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #333;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  background-color: #f4f5f5;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>
