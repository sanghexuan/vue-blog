<template>
  <div class="header-editor">
    <header class="header-editor-header">
      <img
        class="header-editor-header-logo"
        src="../../assets/img/logo/min-logo.png"
      />

      <el-input placeholder="请输入文章标题...." v-model="hook"></el-input>

      <div class="selection">
        <el-select class="option" v-model="value" placeholder="请选择文章类别">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="header-editor-header-tools">
        <button class="addActicle1" @click="add">发布</button>
        <button class="addActicle2" @click="back">取消</button>
      </div>
    </header>
  </div>
</template>

<script>
import { CellGroup } from "view-design";
export default {
  name: "header-editor",
  components: {},
  props: ["handbook"],
  data() {
    return {
      hook: "",
      data: {},
      options: [
        { value: "web", label: "前端开发" },
        { value: "java", label: "java后段" },
        { value: "other", label: "others其他" },
      ],
      value: "",
    };
  },
  methods: {
    add() {
      var dayjs = require("dayjs");
      const nowtime = dayjs().format("YYYY MM.DD HH:mm:ss");
      this.data["title"] = this.handbook;
      this.data["body"] = this.hook;
      this.data["type"] = this.value;
      this.data["time"] = nowtime;
      const localData =
        localStorage.getItem("books") === null
          ? "[]"
          : localStorage.getItem("books");
      const obj = JSON.parse(localData);
      obj.push(this.data);
      localStorage.setItem("books", JSON.stringify(obj));
      this.$router.push({
        name: "index",
      });
    },
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="less" scoped>
.header-editor {
  width: 100%;
  height: 60px;
  position: relative;

  &-header {
    width: 100%;
    height: 60px;
    display: flex;
    background: #fff;

    &-logo {
      width: 60px;
      height: 60px;
      padding: 10px;
      align-items: center;
    }

    &-tools {
      width: 380px;
      line-height: 60px;
      .todoSave {
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        white-space: nowrap;
        color: #ddd;
        cursor: default;
        user-select: none;

        span {
          margin: 0 0 0 6px;
          padding: 3px 10px;
          color: inherit;
          text-decoration: none;
          border: 1px solid currentColor;
          border-radius: 2px;
        }
      }
      .articleImg {
        color: #ddd;
        font-size: 25px;
        padding: 1px 15px;
        vertical-align: middle;
      }
      .addActicle1 {
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        color: #007fff;
        cursor: pointer;
        background: transparent;
        border: 1px solid;
        user-select: none;
        outline: none;
        cursor: pointer;
      }
      .addActicle2 {
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        color: #ff0037;
        cursor: pointer;
        background: transparent;
        border: 1px solid;
        user-select: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .header-editor-header-tools {
    width: auto;
    .addActicle2 {
      margin-left: 10px;
    }
  }
  .option {
    border: 1px;
    position: absolute;
    top: 10px;
    right: 70px !important;
  }
  .el-input {
    width: 48%;
    margin-right: 30px;
    margin-top: 10px;
  }
  @media (max-width: 390px) {
    .header-editor-header-logo {
      display: none;
    }
    .header-editor-header-tools {
      padding-left: 0;
    }
    .el-input {
      width: 60%;
    }
    .addActicle1 {
      padding: 0 10px;
    }
    .addActicle2 {
      padding: 0 10px;
    }
  }
}
</style>
