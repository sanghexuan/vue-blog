<template>
  <div class="topics-list">
    <div
      class="topics-list-item"
      v-for="(item, index) in topicsData"
      :key="index"
    >
      <div class="item-box">
        <div class="topics-info">
          <div style="display: flex; margin-bottom: 5px; align-items: center">
            <img class="topics-img" :src="item.avatar" />
            <p class="topics-info-title">{{ item.username }}</p>
            <p>阅读量{{ item.visitCount }}</p>
          </div>
          <p>创建时间：{{ item.lastActiveTime }}</p>
          <h4 id="target">{{ item.title }}</h4>
          <div class="topics-info-btn">
            <el-dropdown trigger="click" size="small" placement="top-start">
              <span> <icon-fa icon="share"></icon-fa></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  ><div @click="copy">复制内容</div></el-dropdown-item
                >
                <el-dropdown-item
                  ><div @click="share">分享</div></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <span class="action-active" @click="personReply(index)">
              <icon-fa icon="comment"></icon-fa>
            </span>

            <span class="action-active thump" @click="Up(index)">
              <icon-fa :class="{ active: item.isActive }" icon="thumbs-up">
              </icon-fa>
              <div>{{ item.repliesCount }}</div>
            </span>
          </div>
          <el-button type="text" @click="openComment(index)">{{
            item.replyVisible ? "收起评论" : "展开评论"
          }}</el-button>
          <span v-if="item.visible">
            <div>
              回复<el-input
                :key="item.key"
                autofocus
                v-model="recommend"
                @change="handleClick(index)"
              ></el-input>
            </div>
          </span>
          <div v-if="item.replyVisible">
            <div class="reply" v-for="item in item.reply" :key="item.key">
              <h4>{{ item.name }}</h4>
              <p v-html="item.content"></p>
              <p>{{ item.replyTime }}</p>
            </div>
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
import axios from "axios";
import { Loading } from "element-ui";

export default {
  name: "topics-list",
  components: { IconFa, NavButton },
  props: {
    topics: { type: Array },
  },
  data() {
    return {
      data: [],
      recommend: "",
      topicsData: [],
      update: false,
    };
  },

  methods: {
    openComment(index) {
      this.topicsData[index].replyVisible =
        !this.topicsData[index].replyVisible;
      Loading.service();
      axios({
        method: "get",
        url: `https://blog-maomao.herokuapp.com/api/hot/${this.topicsData[index].id}/`,
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => {
        let loadingInstance = Loading.service();
        this.$nextTick(() => {
          loadingInstance.close();
        });
        this.topicsData[index].reply = res?.data.comments;
        this.topicsData = [...this.topicsData];
      });
      console.log(this.topicsData[index]);
    },
    handleClick(index) {
      this.recommend = "";
      this.topicsData[index].reply.title.push(this.recommend);
    },
    personReply(index) {
      this.topicsData.forEach((item) => (item.visible = false));
      this.topicsData[index].visible = !this.topicsData[index].visible;

      this.topicsData = [...this.topicsData];
    },
    gotoTopicsDetails(topicid) {
      this.$router.push({
        path: "/topics/topicsDetail/topicid" + topicid,
      });
    },
    share() {
      window.location.href =
        "https://service.weibo.com/share/share.php?title=%E5%A4%A7%E5%AE%B6%E4%B8%8A%E7%8F%AD%E9%80%9A%E5%8B%A4%E6%97%B6%E9%97%B4%E9%83%BD%E5%A4%9A%E4%B9%85%E5%95%8A%5B%E6%80%9D%E8%80%83%5D%20https%3A%2F%2Fjuejin.cn%2Fpin%2F7094175439542812685%20(%E6%83%B3%E7%9C%8B%E6%9B%B4%E5%A4%9A%E6%B2%B8%E7%82%B9%EF%BC%8C%E4%B8%8B%E8%BD%BD%20%40%E6%8E%98%E9%87%91%E6%8A%80%E6%9C%AF%E7%A4%BE%E5%8C%BA%20App%3Ahttp%3A%2F%2Ft.cn%2FRL4EwOg%20)%20%23%E6%8E%98%E9%87%91%E6%B2%B8%E7%82%B9%23&url=https%3A%2F%2Fjuejin.cn%2Fpin%2F7094175439542812685&pic=https%3A%2F%2Fp26-passport.byteacctimg.com%2Fimg%2Fuser-avatar%2Fa6e2a380fa1b0a97cb5813a5c9d386fd~300x300.image#_loginLayer_1651743910716";
    },
    copy() {
      let text = document.getElementById("target").innerText;
      this.$copyText(text).then(() => {
        this.$message("复制成功");
      });
    },
    Up(index) {
      this.topicsData[index].repliesCount++;
    },
  },
  watch: {
    topics: {
      handler(newVal) {
        this.topicsData = newVal;
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    axios({
      method: "get",
      url: "https://blog-maomao.herokuapp.com/api/hot/6262718079f90d94a6a0d2f5/",
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.topics-list {
  width: 100%;
  background: #f4f5f5;
  .topics-img {
    flex: 0 0 auto;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    display: inline-block !important;
  }
  .topics-info-title {
    padding-left: 5px !important;
    display: inline-block !important;
    margin-bottom: 5px;
    margin-right: 8px;
  }
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
.active {
  color: orangered;
}
.thump {
  display: flex;
}
@media (max-width: 720px) {
  .topics-list {
    &-item {
      width: 50%;
    }
  }
}
.reply {
  p {
    display: inline-block;
  }
}
</style>
