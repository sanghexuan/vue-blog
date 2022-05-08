<template>
  <div name="my-self">
    <el-tabs
      :tab-position="tabPosition"
      v-model="activeName"
      @tab-click="handleClick"
      style="height: 600px"
    >
      <el-tab-pane label="个人资料" name="first">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="personalDataTotal"
        >
          <el-form-item label="用户名">
            <el-input v-model="personalDataTotal.name"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="personalDataTotal.region"></el-input>
          </el-form-item>
          <el-form-item label="公司">
            <el-input v-model="personalDataTotal.type"></el-input>
          </el-form-item>
          <el-form-item label="个人主页">
            <el-input v-model="personalDataTotal.web"></el-input>
          </el-form-item>
          <el-form-item label="个人介绍">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="personalDataTotal.textarea"
            ></el-input>
          </el-form-item>
        </el-form>
        <!-- 个人资料保存提交弹出框 -->
        <el-button :plain="true" type="primary" @click="open"
          >保存提交</el-button
        >
      </el-tab-pane>
      <!-- 账号密码区域 -->
      <el-tab-pane label="账号设置" name="second">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="accountSettings"
        >
          <el-form-item label="账号">
            <el-input
              placeholder="请输入账号"
              v-model="accountSettings.name"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              v-model="accountSettings.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            :loading="tableloading"
            :plain="true"
            type="primary"
            @click="personOpen"
            >保存提交</el-button
          >
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="简历管理" name="third">
        <h1 style="font-size: 20px; color: #606266">简历管理</h1>
        <!-- 简历上传 -->
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="mini" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <!-- 简历展示 -->
        <div class="demo-image__placeholder" style="margin-top: 20px">
          <div class="block">
            <span class="demonstration">简历展示：</span>
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的文章" name="fourth"
        >我的文章
        <template>
          <el-table
            v-loading="loading"
            :data="tableData"
            stripe
            border
            height="620"
            style="width: 100%"
          >
            <el-table-column fixed prop="title" label="标题" width="150">
            </el-table-column>
            <el-table-column prop="tagList" label="标签" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click="handleClickdetils(scope.$index)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button
                  @click="editDetils(scope.$index)"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button
                  @click="deleteAirtcle(scope.$index, scope.row)"
                  type="text"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane label="用户管理" name="five">
        <user-control></user-control>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import UserControl from "./user-control.vue";

export default {
  name: "my-self",
  components: { UserControl },
  props: { personalData: { type: Object } },
  data() {
    return {
      tableData: [],
      activeName: "first",
      tabPosition: "left",
      labelPosition: "left",
      tableloading: true,
      loading: false,
      // 简历展示图片
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      // 简历上传文件
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      // 个人资料数据
      personalDataTotal: {
        name: this.personalData.name || "",
        region: this.personalData.region || "",
        type: this.personalData.type || "",
        web: this.personalData.web || "",
        textarea: this.personalData.textarea || "",
      },
      // 账号设置数据
      accountSettings: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    // tabs栏
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleClickdetils(id) {
      this.$router.push({ path: `/server/articleDetails/${id}` });
    },
    editDetils(id) {
      this.$router.push({
        path: `/editor/articleEditor?id=${id}`,
      });
    },
    deleteAirtcle(id, row) {
      let token = localStorage.getItem("token");
      let ID = row._id;
      this.$messagebox
        .confirm(`是否删除 ${row.title} 此条数据, 是否继续?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          this.tableData.splice(id, 1);
          axios({
            method: "delete",
            url: `https://blog-maomao.herokuapp.com/api/articles/${ID}`,
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${token}`,
            },
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 简历文件
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 个人资料弹出框消息提示
    open() {
      this.$message("保存提交成功！");
    },
    // 账号设置 修改账户密码
    personOpen() {
      this.loading = true;
      axios({
        method: "put",
        url: "https://blog-maomao.herokuapp.com/api/users",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${this.$store.state.token}`,
        },
        data: {
          user: {
            email: this.accountSettings.name,
            password: this.accountSettings.password,
          },
        },
      })
        .then((res) => {
          this.$store.commit("changeToken", "");
          localStorage.setItem("token", "");
          this.$message("账号密码设置成功！");
          this.loading = false;
        })
        .catch((err) => {
          if (err.response.data.statusCode == 401) {
            this.$message("请先登陆的用户！");
          } else {
            this.$message(err.response.data.message);
          }
          this.loading = false;
        });
    },
    getAriticle() {
      this.tableloading = true;
      axios({
        method: "get",
        url: "https://blog-maomao.herokuapp.com/api/articles",
      })
        .then((res) => {
          this.tableloading = false;
          this.tableData = res.data.articles;
        })
        .catch((err) => {
          this.$message(err);
        });
    },
  },
  created() {
    this.getAriticle();
    // this.personalData = JSON.parse(localStorage.getItem("personalData"));
  },
};
</script>

<style lang="less">
.el-input .el-input__inner {
  height: 30px;
}
.el-tabs__item {
  padding-left: 0;
}
.el-tabs {
  padding: 0 8px;
}
</style>
