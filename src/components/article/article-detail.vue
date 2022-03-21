<template>
  <article class="article-detail">
    <!-- 标题 -->
    <h2 class="article-detail-title">{{ this.data.body }}</h2>
    <div class="article-detail-info">
      <img class="article-userImg" :src="img" />
      <div class="article-info">
        <h4 class="article-info-name">用户名称<b>Lv3</b></h4>
        <div class="article-info-meg">
          <time>{{ this.data.time }}</time>
          <span class="views-count">阅读 9090</span>
        </div>
        <el-button class="editBtn" type="text" @click="edit(data)"
          >编辑</el-button
        >
      </div>
    </div>
    <h4>{{ this.data.title }}</h4>

    <!-- <div class="article-detail-content"> -->

    <!-- <markdown-preview></markdown-preview> -->
    <!-- </div> -->
  </article>
</template>

<script>
// const img1 = require("../../assets/img/images/img5.png");
import img1 from "../../../dist/onLine-build/img/img1.png";
export default {
  name: "article-detail",
  components: {},
  props: ["data"],
  data() {
    return {
      mdData: mdFile,
      random: "",
      img: img1 || "",
    };
  },
  methods: {
    edit(data) {
      this.$router.push({
        path: `/editor/articleEditor?id=${this.$route.params.id}`,
      });
    },
    // img() {
    //   const path = require("path");
    //   this.random = `../../img/images/img${Number.parseInt(
    //     Math.random() * 10
    //   ).toString()}.png`;
    //   this.random = path.resolve(this.random);
    //   console.log(this.random);
    // },
  },

  mounted() {
    // this.random = `img/img${Number.parseInt(
    //   Math.random() * 0
    // ).toString()}.png`;
    console.log();
  },
};
</script>

<style lang="less" scoped>
.article-detail {
  margin-bottom: 36px;
  padding: 15px 24px 0;
  min-height: 900px;
  .article-detail-title {
    font-size: 22px;
    margin: 5px 0 10px 0;
  }
  &-info {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    position: relative;
    .editBtn {
      position: absolute;
      right: 0;
      top: 27px;
    }
  }
  .article {
    &-userImg {
      flex: 0 0 auto;
      margin-right: 12px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    &-info {
      min-width: 0;
      flex-grow: 1;

      &-name {
        display: inline-block;
        max-width: 100%;
        font-size: 16px;
        font-weight: 700;
        color: #333;

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

      &-meg {
        font-size: 13px;
        color: #909090;

        time {
          letter-spacing: 1px;
        }

        .views-count {
          margin-left: 6px;
        }
      }
    }
  }
}

&-title {
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
}

&-content {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
}
</style>
