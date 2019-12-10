<template>
  <div class="daily">
    <div class="daily-menu">
      <div
        class="daily-menu-item"
        @click="handleToRecommend"
        :class="{ on: type === 'recommend' }"
      >每日推荐</div>
      <!-- <div class="daily-menu-item"
                :class="{ on: type === 'daily' }"
      @click="showThemes = !showThemes">主题日报</div>-->
      <!-- <ul v-show="showThemes">
                <li v-for="item in themes" :key="item.id">
                    <a :class="{ on: item.id === themeId && type === 'daily' }"
                        @click="handleToTheme(item.id)">{{ item.name }}</a>
                </li>
      </ul>-->
      <div>
        <el-date-picker
          v-model="dailyTime"
          placeholder="选择日期"
          type="date"
          format="yyyy-MM-dd"
          value-format="timestamp"
          @change="getSTime"
        ></el-date-picker>
      </div>
    </div>
    <div class="daily-list" ref="list">
      <template v-if="type === 'recommend'">
        <div v-for="(list, index) in recommedList" :key="index">
          <div class="daily-date">{{ formatDay(list.date) }}</div>
          <Item
            v-for="item in list.stories"
            :data="item"
            :key="item.id"
            @click.native="handleClick(item.id)"
          ></Item>
        </div>
      </template>
    </div>
    <daily-article :id="articleId"></daily-article>
  </div>
</template>
<script>
import Item from "./components/item";
import dailyArticle from "./components/daily-article";
import $ from "./assets/util.js";
export default {
  name: "App",
  components: { Item, dailyArticle },
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      list: [],
      type: "recommend",
      recommedList: [],
      // dailyTime: $.getTodayTime(),
      dailyTime: "",
      isLoading: false,
      articleId: 0
    };
  },
  methods: {
    handleToRecommend() {
      this.type = "recommend";
      this.recommedList = [];
      this.dailyTime = $.getTodayTime();
      this.getRecommendList();
    },
    getRecommendList() {
      // 加载时设置为true,加载完设置为false
      this.isLoading = true;
      const prevDay = $.prevDay(this.dailyTime + 86400000);
      $.ajax.get("news/before/" + prevDay).then(res => {
        this.recommedList.push(res);
        this.isLoading = false;
      });
    },
    formatDay(date) {
      // 转换为带汉字的月日
      let month = date.substr(4, 2);
      let day = date.substr(6, 2);
      if (month.substr(0, 1) === "0") month = month.substr(1, 1);
      if (day.substr(0, 1) === "0") day = day.substr(1, 1);
      return `${month} 月 ${day} 日`;
    },
    handleClick(id) {
      this.articleId = id;
    },
    getSTime(val) {
      this.dailyTime = val;
      this.getRecommendList();
    }
  },
  mounted() {
    // 初始化时调用
    this.getRecommendList();
    // 获取到dom
    const $list = this.$refs.list;
    // 监听中栏的滚动事件
    $list.addEventListener("scroll", () => {
      // 在主题日报或正在加载推荐列表时停止操作
      if (this.isLoading) return;
      // 已经滚动的距离加页面的高度等于整个内容区域时,视为接触底部
      if ($list.scrollTop + document.body.clientHeight >= $list.scrollHeight) {
        // 时间相对减少一天
        this.dailyTime -= 86400000;
        this.getRecommendList();
      }
    });
  }
};
</script>

