<template>
  <ul class="booklet-list">
    <!-- 书籍的链接下载 点击就可以跳出下载 -->
    <li
      class="booklet-list-item"
      v-for="(item, index) in booklist"
      @click="gotobookletHome(index)"
      :key="item.name"
    >
      <div class="item-logo">
        <img :src="item.logo" />
      </div>
      <div class="item-info">
        <h4 class="booklet-title">{{ item.name }}</h4>
        <div class="booklet-tags">
          <span v-for="tag in item.technology" :key="tag">{{ tag }}</span>
        </div>
        <div class="booklet-describe">
          {{ item.describe }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "booklet-list",
  props: {
    bookletData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    booklist: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    gotobookletHome(bookid) {
      this.$router.push({
        path: "/booklet/bookDetail/" + bookid,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.booklet {
  &-list {
    width: 100%;

    &-item {
      display: flex;
      padding: 25px;
      box-sizing: border-box;
      background-color: #fff;
      position: relative;
      border-bottom: 1px solid #e6e8e8;

      &:hover {
        background-color: #f7f9f9;
      }

      .item {
        &-logo {
          width: 100px;
          height: 140px;
          flex-shrink: 0;
          box-shadow: 3px 4px 12px 0 rgba(0, 0, 0, 0.2);
          overflow: hidden;
          background-color: #ffffff;
          line-height: 140px;

          img {
            width: 100%;
            display: inline-block;
            vertical-align: middle;
          }
        }

        &-info {
          position: relative;
          flex-grow: 1;
          overflow: hidden;
          box-sizing: border-box;
          font-size: 14px;
          color: #2e3135;
          padding-left: 22px;
        }
      }
    }
  }

  &-title {
    font-size: 18px;
    font-weight: 500;
  }

  &-tags {
    padding: 5px 0;

    span {
      color: #eb2f96;
      line-height: 20px;
      background: #fff0f6;
      display: inline-block;
      height: 22px;
      margin: 2px 4px 2px 0;
      padding: 0 8px;
      border: 1px solid #e8eaec;
      border-radius: 3px;
      font-size: 12px;
      vertical-align: middle;
      opacity: 1;
      overflow: hidden;
    }
  }

  &-describe {
    max-height: 45px;
    padding: 5px 0;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 14px;
    color: #808695;
  }
}

@media (max-width: 960px) {
  .booklet {
    &-list {
      &-item {
        padding: 15px;
      }
    }

    &-title {
      padding-bottom: 5px;
    }

    &-describe,
    &-tags {
      padding: 0 0 5px 0;
    }
  }
}
</style>
