<template>
  <ul class="nav-article">
    <li
      class="nav-article-like nav-article-item"
      :Num="this.data1"
      @click="add('data1')"
    >
      <icon-fa class="article-icon" icon="thumbs-up"></icon-fa>
      <div class="like-num-wrapper"></div>
    </li>
    <li
      class="nav-article-like nav-article-item"
      :Num="this.data2"
      @click="add('data2')"
    >
      <icon-fa class="article-icon" icon="star"></icon-fa>
    </li>
    <li
      class="nav-article-like nav-article-item"
      :Num="this.data3"
      @click="add"
    >
      <icon-fa class="article-icon" icon="comments"></icon-fa>
    </li>
    <li class="nav-article-title">分享</li>
    <li class="nav-article-share nav-article-item">
      <icon-fa class="article-icon" icon="weibo"></icon-fa>
    </li>
    <li class="nav-article-share nav-article-item">
      <icon-fa class="article-icon" icon="weixin"></icon-fa>
    </li>
    <li class="nav-article-share nav-article-item">
      <icon-fa class="article-icon" icon="qq"></icon-fa>
    </li>
  </ul>
</template>

<script>
import IconFa from "../icon/icon-fa";

export default {
  name: "nav-article",
  components: { IconFa },
  data() {
    return {
      data1: 36,
      data2: 44,
      data3: 77,
    };
  },
  methods: {
    add: function (el) {
      if (el == "data1") {
        this.data1++;
      } else if (el == "data2") {
        this.data2++;
      } else {
        this.data3++;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.nav-article {
  position: fixed;
  margin-left: -60px;
  top: 190px;

  &-item {
    position: relative;
    margin-bottom: 10px;
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
    cursor: pointer;
    text-align: center;

    .article-icon {
      font-size: 20px;
      line-height: 35px;
      text-align: center;
      padding: 0;
      color: #b2bac1;
    }
  }

  &-like {
    &:hover .article-icon {
      color: #88a598;
    }

    &:after {
      content: attr(Num);
      position: absolute;
      top: 0;
      left: 75%;
      padding: 2px 5px;
      font-size: 12px;
      text-align: center;
      line-height: 1;
      white-space: nowrap;
      background-color: #c2c8d1;
      color: #fff;
      border-radius: 4px;
      transform-origin: left top;
      transform: scale(0.85);
    }
  }

  &-title {
    margin: 30px 0 12px;
    font-size: 13px;
    text-align: center;
    color: #c6c6c6;
    user-select: none;
  }

  &-share {
    &:hover .article-icon {
      color: #88a598;
    }
  }
}

@media (max-width: 960px) {
  .nav-article {
    margin-left: -50px;
    bottom: 90px;
    right: 19px;
    top: auto;

    &-item {
      background-color: rgba(206, 207, 208, 0.7);

      .article-icon {
        color: #ffffff;
      }
    }

    &-title {
      color: #ffffff;
      background: #cecfd0;
      display: none;
    }
  }
}
</style>
