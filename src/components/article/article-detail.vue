<template>
  <article class="article-detail">
    <!-- 标题 -->
    <h1 class="article-detail-title">{{ this.data.body }}</h1>
    <div class="article-detail-info">
      <img class="article-userImg" src="../../assets/img/logo/min-logo.png" />
      <div class="article-info">
        <h4 class="article-info-name">用户名称<b>Lv3</b></h4>
        <div class="article-info-meg">
          <time>{{ this.data.time }}</time>
          <span class="views-count">阅读 9090</span>
        </div>
      </div>
    </div>
    <h4>{{ this.data.title }}</h4>
    <!-- <div class="article-detail-content"> -->

    <!-- <markdown-preview></markdown-preview> -->
    <!-- </div> -->
  </article>
</template>

<script>
import MarkdownPreview from "../markdown/markdown-preview";
import mdFile from "../../../README.md";

export default {
  name: "article-detail",
  components: { MarkdownPreview },
  props: ["data"],
  data() {
    return {
      mdData: mdFile,
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.article-detail {
  margin-bottom: 36px;
  padding: 15px 24px 0;
  min-height: 900px;
  &-info {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

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
}
</style>
