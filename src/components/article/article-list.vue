<template>
  <ul class="article-list">
    <li
      class="article-list-item"
      v-for="(item, index) in data"
      :key="index"
      @click="articleDetails(index)"
      v-show="item.type == articleDate"
    >
      <div class="article-list-item-content">
        <ul class="article-info">
          <li class="article-info-row info-meta">
            <ul class="info-meta-list">
              <li class="item item-user">发布人名称</li>
              <li class="item item-date">发布时间 {{ item.time }}</li>
              <li class="item item-type">
                类别 {{ item.type ? item.type : "暂无" }}
              </li>
            </ul>
          </li>
          <li class="article-info-row info-title">
            <h4>{{ item.body }}</h4>
          </li>
          <li class="info-title">
            <h2>{{ item.title }}</h2>
          </li>
          <li class="article-info-row info-action">
            <span> <icon-fa icon="eye"></icon-fa>{{ math2 }}</span>
            <span> <icon-fa icon="comments"></icon-fa>{{ math3 }} </span>
            <span class="action-active" @click.stop="thumbsUp">
              <icon-fa icon="thumbs-up" @onClick="thumbsUp"></icon-fa>{{ math }}
            </span>
          </li>
        </ul>
      </div>
    </li>

    <li
      class="article-list-item"
      v-for="(item, index) in data"
      :key="index"
      @click="articleDetails(index)"
      v-show="
        articleDate == 'recommend' ||
        ['java', 'web', 'other'].includes(item.type)
      "
    >
      <div class="article-list-item-content">
        <ul class="article-info">
          <li class="article-info-row info-meta">
            <ul class="info-meta-list">
              <li class="item item-user">发布人名称</li>
              <li class="item item-date">发布时间 {{ item.time }}</li>
              <li class="item item-type">
                类别 {{ item.type ? item.type : "暂无" }}
              </li>
            </ul>
          </li>
          <li class="article-info-row info-title">
            <h4>{{ item.body }}</h4>
          </li>
          <li class="info-title">
            <h2>{{ item.title }}</h2>
          </li>
          <li class="article-info-row info-action">
            <span> <icon-fa icon="eye"></icon-fa>{{ math2 }}</span>
            <span> <icon-fa icon="comments"></icon-fa>{{ math3 }} </span>
            <span class="action-active" @click.stop="thumbsUp">
              <icon-fa icon="thumbs-up" @onClick="thumbsUp"></icon-fa>{{ math }}
            </span>
          </li>
        </ul>
        <!-- <div class="article-img">
          <img src="../../assets/img/logo/max-logo.png" />
        </div> -->
      </div>
    </li>
  </ul>
</template>

<script>
import IconFa from "../icon/icon-fa";

export default {
  name: "article-list",
  data() {
    return {
      data: [],
      math: 10,
    };
  },
  props: ["messages", "articleDate"],
  components: { IconFa },
  computed: {
    math2: function () {
      return Math.floor(Math.random() * 113);
    },
    math3: function () {
      return Math.floor(Math.random() * 20);
    },
  },
  methods: {
    // 文章详情
    articleDetails(id) {
      this.$router.push({
        path: "/server/articleDetails/" + id,
      });
    },

    // 点赞
    thumbsUp() {
      return this.math++;
    },
    // 收藏
    starArticle() {},
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem("books")).reverse();
  },
};
</script>

<style lang="less" scoped>
.article-list {
  &-item {
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    &:last-child {
      border-bottom: 1px solid transparent;
    }

    &-content {
      display: flex;
      align-items: center;
      padding: 15px 20px;

      .article-info {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;

        .info-meta {
          height: 20px;
          font-size: 13px;
          color: #b2bac2;

          &-list {
            display: flex;
            align-items: baseline;
            white-space: nowrap;

            .item {
              &:after {
                content: "·";
                margin: 0 5px;
                color: #b2bac2;
                font-weight: 900;
              }

              &:last-child:after {
                content: "";
              }

              &-type {
                color: #1e80ff;
                font-weight: 500;
              }

              &-user {
                text-decoration: none;
                cursor: pointer;
                color: #909090;

                &:hover {
                  color: #1e80ff;
                }
              }

              &-date {
                color: #909090;
              }

              &-tag {
                text-decoration: none;
                cursor: pointer;
                color: #909090;

                &:hover {
                  color: #1e80ff;
                }
              }
            }
          }
        }

        .info-title {
          cursor: pointer;

          h4 {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.2;
            color: #2e3135;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin-top: 5px;
            padding: 10px 0;
          }
          h2 {
            color: #86909c;
            font-size: 13px;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .info-action {
          display: flex;
          align-items: center;

          span {
            padding: 0;
            transform: scale(0.8);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            border-radius: 1px;

            color: #b3bac1;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;

            &.action-active {
              color: #1e80ff;
            }
          }
        }
      }

      .article-img {
        flex: 0 0 auto;
        width: 100px;
        height: 60px;
        margin-left: 50px;
        background-color: #fff;
        border-radius: 2px;
        background-size: cover;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .article-list {
    padding-bottom: 100px;
    &-item {
      &-content {
        .article-img {
          display: none;
        }
      }
    }
  }
}
</style>
