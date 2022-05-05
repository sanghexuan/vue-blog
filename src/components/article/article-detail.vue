<template>
  <article class="article-detail">
    <!-- 标题 -->
    <h2 class="article-detail-title">{{ data.title }}</h2>
    <div class="article-detail-info">
      <img class="article-userImg" :src="imgageUrl" />
      <div class="article-info">
        <h4 class="article-info-name">用户名称<b>Lv3</b></h4>
        <div class="article-info-meg">
          <time>{{ data.time }}</time>
          <span class="views-count">阅读 9090</span>
        </div>
        <el-button class="editBtn" type="text" @click="edit(data)"
          >编辑</el-button
        >
      </div>
    </div>

    <div>
      <div class="markdown-body">
        <VueMarkdown :source="data.body" v-highlight></VueMarkdown>
      </div>
      <div id="interfaceCorrection">
        <!-- <codemirror :value="code" :options="cmOptions"> </codemirror> -->
      </div>
    </div>
  </article>
</template>

<script>
import md5 from "blueimp-md5";
import Identicon from "identicon.js";
import VueMarkdown from "vue-markdown";
import { Loading } from "element-ui";
import "github-markdown-css/github-markdown.css";

// 引入组件
import { codemirror } from "vue-codemirror";
// 引入高亮样式
import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
// 引入语言
import "codemirror/mode/vue/vue.js";
import img1 from "../../../dist/onLine-build/img/img1.png";
export default {
  name: "article-detail",
  components: { codemirror, VueMarkdown },
  props: {
    data: {
      type: Object,
    },
    num: {
      type: Number,
    },
  },
  data() {
    return {
      random: "",
      img: img1 || "",
      code: ` async saveLineData () {
      try {
        let lineData = this.getLineData()
        let res = await ajax.updateFlow(this.lineInfo.id, lineData)
        this.isNeedSave = !res.records || Object.keys(res.records).length === 0
        window.$NotifSuccess('保存流水线成功')
      } catch {
        console.log('error')
      }
    },`,
      cmOptions: { mode: "text/javascript", theme: "base16-dark" },
    };
  },
  methods: {
    edit(data) {
      this.$router.push({
        path: `/editor/articleEditor?id=${this.$route.params.id}`,
      });
    },
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
  watch: {
    data: {
      handler(newVal) {
        if (Object.keys(newVal).length === 0) {
          Loading.service();
        } else {
          let loadingInstance = Loading.service();
          this.$nextTick(() => {
            // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });
        }
      },
      immediate: true,
      deep: true,
    },
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
