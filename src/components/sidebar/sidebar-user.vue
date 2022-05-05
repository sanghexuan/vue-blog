<template>
  <div class="sidebar-user">
    <div class="user-item">
      <img :src="imgageUrl" />
      <div class="user-item-info">
        <h4 class="user-name">用户名称<b>Lv3</b></h4>
      </div>
    </div>
    <div class="info-item">
      <icon-fa class="itemIcon" icon="file-text"></icon-fa>
      <span class="itemContent">文章总数<b>100</b></span>
    </div>
    <div class="info-item">
      <icon-fa class="itemIcon" icon="file-text"></icon-fa>
      <span class="itemContent">文章被阅读<b>2300</b></span>
    </div>
    <div class="info-item">
      <icon-fa class="itemIcon" icon="file-text"></icon-fa>
      <span class="itemContent">文章获点赞<b>134</b></span>
    </div>
  </div>
</template>

<script>
import IconFa from "../icon/icon-fa";
import md5 from "blueimp-md5";
import Identicon from "identicon.js";

export default {
  name: "sidebar-user",
  components: { IconFa },
  methods: {
    getRandomheader() {
      let hash = md5(Math.random());
      let data = new Identicon(hash, 420).toString();
      this.imgageUrl =
        "https://img-blog.csdnimg.cn/2022010611223663237.png" + data;
      let options = {
        foreground: [0, 0, 0, 255], // rgba black
        background: [255, 255, 255, 255], // rgba white
        margin: 0.2, // 20% margin
        size: 100, // 420px square
        format: "svg", // use SVG instead of PNG
      };
      let data1 = new Identicon(hash, options).toString();
      this.imgageUrl = "data:image/svg+xml;base64," + data1;
    },
  },
  created() {
    this.getRandomheader();
  },
};
</script>

<style lang="less" scoped>
.sidebar-user {
  width: 100%;

  .user-item {
    padding: 12px 0 15px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 0.8rem;
    }

    .user {
      &-item-info {
        flex: 1;
        min-width: 0;

        h4 {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 3px;

          b {
            color: #ffffff;
            font-size: 12px;
            background: #1e80ff;
            padding: 1px 5px;
            margin-left: 10px;
            vertical-align: middle;
            border-radius: 2px;
          }
        }

        p {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #72777b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .info-item {
    margin-bottom: 10px;

    .itemIcon {
      height: 30px;
      width: 30px;
      color: aliceblue;
      line-height: 30px;
      text-align: center;
      padding: 0;
      background: #e7485e;
      margin-right: 12px;
      border-radius: 50%;
    }

    .itemContent {
      font-size: 15px;
      color: #000;

      b {
        margin-left: 10px;
      }
    }
  }
}
</style>
