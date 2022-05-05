<template>
  <div class="page">
    <div class="page-list">
      <topics-list :topics="topics"></topics-list>
    </div>
    <div class="page-sidebarx" id="sidebar">
      <sidebar-box title="推荐话题" icon="tags" color="red">
        <sidebar-topics slot="list" :recommend="recommend"></sidebar-topics>
      </sidebar-box>
    </div>
  </div>
</template>

<script>
import SidebarBox from "../../components/sidebar/sidebar-box";
import SidebarTopics from "../../components/sidebar/sidebar-topics";
import TopicsList from "../../components/topics/topics-list";
import axios from "axios";
import { Loading } from "element-ui";
import md5 from "blueimp-md5";
import Identicon from "identicon.js";

export default {
  name: "index",
  components: { TopicsList, SidebarTopics, SidebarBox },
  data() {
    return {
      topics: [],
      recommend: [],
    };
  },
  mounted() {
    let loadingInstance = Loading.service();
    axios({
      method: "get",
      url: "https://blog-maomao.herokuapp.com/api/hot",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.$nextTick(() => {
          // 以服务的方式调用的 Loading 需要异步关闭`
          loadingInstance.close();
        });
        this.topics = res.data.res;
        this.topics = this.topics.map((item) => {
          item.url = this.getRandomheader();
          return item;
        });
        this.recommend = res.data.res
          .sort((a, b) => b.visitCount - a.visitCount)
          .slice(0, 5);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  },
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
      return (this.imgageUrl = "data:image/svg+xml;base64," + data1);
    },
  },
};
</script>

<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
}

@media (max-width: 720px) {
  .index {
  }
}
</style>
