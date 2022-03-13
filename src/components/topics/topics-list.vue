<template>
  <div class="topics-list">
    <div
      class="topics-list-item"
      v-for="item in 10"
      :key="item"
      @click="gotoTopicsDetails(item)"
    >
      <div class="item-box">
        <div class="topics-info">
          <h2 class="topics-info-title">用户名</h2>

          <p>创建时间：2020-02-02</p>
          <h4>内容</h4>
          <div class="topics-info-btn">
            <span> <icon-fa icon="share"></icon-fa></span>
            <span class="action-active">
              <icon-fa icon="comment"></icon-fa>
            </span>
            <span class="action-active">
              <icon-fa icon="thumbs-up"></icon-fa>
            </span>
          </div>
        </div>
      </div>
    </div>
    <nav-button></nav-button>
  </div>
</template>

<script>
import IconFa from "../icon/icon-fa";
import NavButton from "../navbar/nav-button.vue";

export default {
  name: "topics-list",
  components: { IconFa, NavButton },
  methods: {
    gotoTopicsDetails(topicid) {
      this.$router.push({
        path: "/topics/topicsDetail/topicid" + topicid,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.topics-list {
  width: 100%;
  background: #f4f5f5;

  &-item {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding-left: 7px;
    padding-right: 7px;
    box-sizing: border-box;
    transition: all 0.2s linear;
    position: relative;
    margin-bottom: 30px;

    &:hover,
    &:before {
      transform: translateY(-3px);
    }

    &:before {
      content: "";
      position: absolute;
      left: 7px;
      right: 7px;
      top: 0;
      bottom: 0;
      z-index: -1;
      border-radius: 2px;
      overflow: hidden;
      background-color: #fff;
      transition: all 0.2s linear;
    }

    .item-box {
      color: #333;
      border-radius: 2px;
      overflow: hidden;
      background: #ffffff;

      img {
        width: 100%;
        height: 85px;
        max-height: 85px;
      }

      .topics-info {
        padding: 12px 12px 15px;

        h2 {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          height: 40px;
          font-size: 18px;
          font-weight: 700;
          text-align: left;
          padding-top: 10px;
        }

        p {
          margin-bottom: 6px;
          color: #333;
        }

        &-btn {
          margin-top: 6px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .topics-list {
    &-item {
      width: 50%;
    }
  }
}
</style>
