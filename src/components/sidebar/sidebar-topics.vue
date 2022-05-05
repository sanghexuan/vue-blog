<template>
  <ul class="sidebar-topics">
    <li
      class="topics-item"
      v-for="item in recommend"
      @click="gotoTopicsDetails(item)"
      :key="item.key"
    >
      <div class="topics-item-info">
        <span>Hot</span>
        <h4 class="topics-name">{{ `#${item.title}#` }}</h4>
        <span class="topics-content">阅读量{{ item.visitCount }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import IconFa from "../icon/icon-fa";

export default {
  name: "sidebar-topics",
  props: { recommend: { type: Array } },
  data() {
    return {};
  },
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
.sidebar-topics {
  .topics-item-info {
    position: relative;
    span {
      color: orangered;
    }
  }
  width: 100%;
  .topics-name {
    display: inline-block;
    margin-left: 5px;
  }
  .topics-content {
  }
  .topics-item {
    padding: 12px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px dashed #eeeeee;

    &:last-child {
      border-bottom: 1px dashed transparent;
    }

    .topics {
      &-item-img {
        width: 45px;
        height: 65px;
        box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
        background-color: #ffffff;
        line-height: 140px;
        margin-right: 10px;

        img {
          width: 45px;
          height: 100%;
        }
      }

      &-item-info {
        flex: 1;
        min-width: 0;

        h4 {
          font-size: 15px;
          font-weight: 400;
          color: #333;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>
