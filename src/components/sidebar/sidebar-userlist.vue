<template>
  <ul class="sidebar-userlist">
    <li class="user-item" v-for="item in 5" :key="item">
      <img :src="getRandomheader()" />
      <div class="user-item-info">
        <h4 class="user-name">用户名称{{ item }}<b>Lv3</b></h4>
        <p class="user-description">用户描述{{ item }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import md5 from "blueimp-md5";
import Identicon from "identicon.js";

export default {
  name: "sidebar-userlist",
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
      return this.imgageUrl;
    },
  },
  created() {
    // this.getRandomheader();
  },
};
</script>

<style lang="less" scoped>
.sidebar-userlist {
  width: 100%;

  .user-item {
    padding: 12px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px dashed #eeeeee;

    &:last-child {
      border-bottom: 1px dashed transparent;
    }

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
          font-weight: 400;
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
          color: #909090;
          font-size: 12px;
          margin-bottom: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
