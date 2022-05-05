<template>
  <div class="article-comment comment">
    <div class="comment-title">文章点评</div>
    <div style="text-align: right">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="输入内容回复"
        v-model="textarea2"
      >
      </el-input>
      <el-button type="primary" @click="addfirstcontext">发表评论</el-button>
    </div>
    <!-- 评论模块 -->
    <ul
      class="comment-list"
      v-for="(item, index) in compluteTime(this.items)"
      :key="index"
    >
      <li class="comment-list-item">
        <div class="user-comment">
          <ul class="user-comment-sub">
            <li class="user-comment-sub-item">
              <img class="user-img" :src="item.url" />
              <div class="user-comment">
                <div class="user-comment-meg">
                  <h4 class="user-name user-nameov">用户名称</h4>
                  <time>{{ item.time }}</time>
                </div>
                <!-- 一级评论区 -->
                <span class="user-firstcomment">
                  {{ item.topcomment }}
                </span>
                <div class="action-box">
                  <span @click="deletetopcomment(index)">
                    <icon-fa icon="trash"></icon-fa>删除
                  </span>
                  <span
                    :class="{ active: item.isActive }"
                    @click="thumbsUp(index)"
                  >
                    <icon-fa icon="thumbs-up"></icon-fa
                    >{{ item.isActive ? "取消点赞" : "点赞" }}
                  </span>
                  <span @click="adddd(index)">
                    <icon-fa icon="comments"></icon-fa>评论
                  </span>
                </div>
                <!-- 二级回复区 -->
                <div class="user-secondconntent">
                  <!-- 判断是否回复二级用户 -->
                  <div>
                    <!-- <span class="reply">回复</span> -->
                    <!-- <h4 class="user-name reply-user">用户名称:</h4> -->
                  </div>
                  <div
                    class="user-comment-reply"
                    v-for="(comment, index1) in compluteTime(
                      item.childComments
                    )"
                    :key="index1"
                  >
                    <h4 class="user-name reply-user">用户名称:</h4>
                    <span class="user-secondconntent">
                      {{ comment.topcomment }}</span
                    >
                    <time>{{ comment.time }}</time>
                    <div class="action-box">
                      <span @click="deletechildcomment(index, index1)">
                        <icon-fa icon="trash"></icon-fa>删除</span
                      >
                      <span
                        :class="{ active1: comment.isActive }"
                        @click="thumbschildUp(index, index1)"
                      >
                        <icon-fa icon="thumbs-up"></icon-fa
                        >{{ comment.isActive ? "取消点赞" : "点赞" }}</span
                      >
                      <!-- <span @click="showModal = true">
                        <icon-fa icon="comments"></icon-fa>评论
                      </span> -->
                    </div>
                  </div>
                  <!-- <div
                    v-for="(comment, index1) in item.childComments"
                    :key="index1"
                  >
                    <ul>
                      <li
                        v-for="grandcomment in comment.grandsonComments"
                        :key="grandcomment.index"
                      >
                        <div>{{ grandcomment.bodycomment }}</div>
                      </li>
                    </ul>
                    <div v-model="showModal">
                      <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea3"
                      >
                      </el-input>
                      <div>
                        <button
                          @click="addsecondcontext(index, index1)"
                          class="btn"
                          style="margin-right: 5px"
                        >
                          发布
                        </button>
                        <button @click="showModal = false" class="btn">
                          取消
                        </button>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- 回复模块 -->
                <div v-if="item.showInput == true">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                  <div>
                    <button
                      @click="addcontext(index, item)"
                      class="btn"
                      style="margin-right: 5px"
                    >
                      发布
                    </button>
                    <button @click="close(index)" class="btn">取消</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import Identicon from "identicon.js";
import IconFa from "../icon/icon-fa";
import * as dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default {
  name: "article-comment",
  components: { IconFa },
  inject: ["reload"],
  data() {
    return {
      items: [],
      comments: [],
      showModal: false,
      commentor: {},
      textarea: "",
      textarea2: "",
      textarea3: "",
    };
  },
  methods: {
    addfirstcontext() {
      this.commentor["topcomment"] = this.textarea2;
      this.commentor["showInput"] = false;
      this.commentor["isActive"] = false;
      var dayjs = require("dayjs");
      const createtime = dayjs().format("YYYY-MM-DD HH:mm:ss");
      this.commentor["time"] = createtime;
      this.items = JSON.parse(localStorage.getItem("comments") || "[]");
      this.items.push(this.commentor);
      localStorage.setItem("comments", JSON.stringify(this.items));
      this.textarea2 = "";
      this.reload();
    },

    addcontext(index) {
      var dayjs = require("dayjs");
      const createtime1 = dayjs().format("YYYY-MM-DD HH:mm:ss");
      this.items[index]["childComments"] =
        this.items[index]["childComments"] || [];
      this.items[index]["childComments"].push({
        topcomment: this.textarea,
        showInput: false,
        time: createtime1,
      });
      localStorage.setItem("comments", JSON.stringify(this.items));
      this.textarea = "";
      this.close(index);
    },
    adddd(index) {
      this.items[index].showInput = true;
      localStorage.setItem("comments", JSON.stringify(this.items));
    },
    // addsecondcontext(index, index1) {
    //   this.items[index]["childComments"][index1]["grandsonComments"] =
    //     this.items[index]["childComments"][index1]["grandsonComments"] || [];
    //   this.items[index]["childComments"][index1]["grandsonComments"].push({
    //     bodycomment: this.textarea3,
    //   });
    //   localStorage.setItem("comments", JSON.stringify(this.items));
    //   this.textarea = "";
    //   this.reload();
    // },
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
      return (this.imgageUrl = "data:image/svg+xml;base64," + data1);
    },

    close(index) {
      this.items[index].showInput = false;
      localStorage.setItem("comments", JSON.stringify(this.items));
      this.reload();
    },
    deletetopcomment(index) {
      this.items.splice(index, 1);
      localStorage.setItem("comments", JSON.stringify(this.items));
    },
    deletechildcomment(index, index1) {
      this.items[index].childComments.splice(index1, 1);
      localStorage.setItem("comments", JSON.stringify(this.items));
    },
    // closechild(grandcomment) {
    //   console.log(grandcomment);
    //   grandcomment.showInput = false;
    //   localStorage.setItem("comments", JSON.stringify(this.items));
    // },
    thumbsUp(index) {
      this.items[index]["isActive"] = !this.items[index]["isActive"];
      localStorage.setItem("comments", JSON.stringify(this.items));
    },
    thumbschildUp(index, index1) {
      this.items[index]["childComments"][index1]["isActive"] =
        !this.items[index]["childComments"][index1]["isActive"];
      localStorage.setItem("comments", JSON.stringify(this.items));
      this.reload();
    },
    compluteTime(el) {
      const newitems = el?.map((item) => {
        const newitem = { ...item };
        newitem.time = dayjs().to(dayjs(item.time));
        newitem.url = this.getRandomheader();
        return newitem;
      });

      return newitems;
    },
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem("comments"));
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #406599;
}
.active1 {
  color: #406599;
}
.comment {
  padding: 24px 0 0;
  position: relative;
  border-top: 2px dashed #eee;
  .user-comment-meg {
    justify-content: space-between;
  }
  .pop {
    background-color: #fff;
    border: 2px dashed #eee;
    width: 100%;
    height: 80px;
  }
  .btn {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #f8f8f8;
    padding: 4px 12px;
  }
  .user-firstcomment {
    display: block;
    font-size: 17px;
    margin: 5px 0;
  }
  .user-secondconntent {
    display: block;
    font-size: 14px;
  }

  &-title {
    color: #8a9aa9;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 15px 0 25px;
  }

  &-list {
    margin: 0 20px 0 20px;

    .user-name {
      font-size: 15px;
      font-weight: 700;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
      font-size: 12px regular;
      &.user-nameov {
        overflow: inherit;
      }

      b {
        color: #ffffff;
        font-size: 12px;
        background: #e7475d;
        padding: 1px 5px;
        margin-left: 10px;
        vertical-align: middle;
        border-radius: 2px;
      }

      &.reply-user {
        color: #406599;
        display: initial;
        padding-right: 8px;
        font-size: 13px;

        b {
          padding: 0px 5px;
        }
      }
    }

    &-item {
      margin-bottom: 15px;
      display: flex;

      .user-img {
        width: 33px;
        height: 33px;
        display: inline;
      }

      .user-comment {
        width: 100%;
        margin-left: 10px;
        flex: 1;
        min-width: 0;
        border-bottom: 1px solid #f1f1f1;

        .reply {
          font-size: 14px;
          color: #17181a;
        }

        &-meg {
          display: flex;
          align-items: center;
          font-size: 13px;
          line-height: 1.2;
          white-space: nowrap;

          .user-work {
            color: #8a9aa9;
            font-size: 14px;
            margin-left: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 16rem;
          }
        }

        &-conntent {
          margin-top: 10px;
          font-size: 14px;
          line-height: 20px;
          word-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-all;
          color: #505050;

          a {
            color: #027fff;
            cursor: pointer;

            &:active,
            &:hover {
              outline-width: 0;
              text-decoration: none;
            }

            .icon-link {
              color: #027fff;
              font-size: 12px;
              padding: 0 0 0 5px;
            }
          }
        }

        &-reply {
          display: flex;
          margin: 12px 0;
          font-weight: 400;

          time {
            font-size: 13px;
            color: #8a9aa9;
            cursor: default;
            line-height: 22px;
            margin-left: 10px;
          }

          .action-box {
            flex: 0 0 auto;
            display: flex;
            justify-content: space-between;
            margin-left: auto;
            min-width: 110px;
            color: #8a93a0;
            user-select: none;

            span {
              padding: 0 5px;
            }
          }
        }

        &-sub {
          margin: 12px 0;
          padding: 0 0 0 12px;
          background-color: #fafbfc;
          border-radius: 3px;

          &-item {
            position: relative;
            padding: 12px 0 0;
            display: flex;
            align-items: start;
          }
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .comment {
    margin: 0 15px 30px;

    &-title {
      padding: 15px 0 20px;
    }

    &-list {
      margin: 0;

      .user-name {
        &.reply-user {
          padding-right: 5px;
        }
      }

      &-item {
        .user-comment {
          &-sub {
            padding: 0 7px;
          }
        }
      }
    }
  }
}
</style>
