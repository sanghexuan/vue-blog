<template>
  <div class="header-editor">
    <header class="header-editor-header">
      <img
        class="header-editor-header-logo"
        src="../../assets/img/logo/min-logo.png"
      />
      <div class="header-editor-header-input">
        <input placeholder="请输入文章标题...." maxlength="80"  @change="change($event)"></input>    
      </div>
      <div>
        <select class="option" @change="onchange($event)">
          <option value="web" >前端开发</option>
          <option value="java">java后段</option>
          <option value="other" >others其他</option>
          <option value="" selected="selected">请选择文章类别</option>
         </select>
      </div>
      <div class="header-editor-header-tools">
        <button class="addActicle1" @click="add">发布</button>
        <button class="addActicle2" @click="back">取消</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "header-editor",
  components: {},
  props: ["handbook"],
  data() {
    return {
      hook: "",
      hook1: "",   
      data: {}
    }
  },
  methods: {
    change(e) {
      // 标题
      this.hook = e.target.value;
    },
     onchange(e) {
      this.hook1 = e.target.value
    },
    add() {
    var dayjs = require('dayjs')
    const nowtime = dayjs().format("YYYY MM.DD HH:mm:ss");
     this.data["title"] = this.handbook
     this.data["body"] = this.hook
     this.data["type"] = this.hook1
     this.data["time"] = nowtime
    const localData = localStorage.getItem('books') === null ? "[]" : localStorage.getItem('books')
    const obj = JSON.parse(localData)
    obj.push(this.data)
    localStorage.setItem('books',JSON.stringify(obj))
    this.$router.push({
      name: "index",
    });
     
    },
    back() {
      window.history.back();
    },
   
  },
  
 watch: {
 
 }
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

    &-input {
      flex: 1;
      min-width: 0;

      input {
        width: 100%;
        height: 60px;
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: 700;
        color: #000;
        border: none;
        outline: none;
      }
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
        padding: 0 20px;
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
        padding: 0 20px;
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
    padding-left: 190px;
    .addActicle2 {
      margin-left: 10px;
    }
  }
  .option {
    border: 1px;
    position: absolute;
    top: 18px;
    right: 200px;
  }
}
</style>
