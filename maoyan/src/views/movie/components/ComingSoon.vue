<template>
  <div class="list-wrap">
    <div class="most-except">
      <p class="title">近期最受期待</p>
      <div class="most-expected-list" ref="scroll">
        <MostExceptItem v-for="item in dataset.coming" :key="item.id" :item="item" />
      </div>
    </div>
    <div class="coming-container">
      <div v-for="(items, name) in cominglistByDay" :key="name">
        <h4>{{name}}</h4>
        <ComingItem v-for="item in items" :item="item" :key="item.id"></ComingItem>
      </div>
    </div>
  </div>
</template>

<script>
import MostExceptItem from "./MostExceptItem";
import ComingItem from "./ComingItem";
import { mostExpected, comingList } from "@/api/movie";
export default {
  name: "ComingSoon",
  components: { MostExceptItem, ComingItem },
  data() {
    return {
      dataset: {
        coming: [],
        paging: {
          hasMore: true,
          limit: 10,
          offset: 0,
          total: 0
        }
      },
      cominglist: {
        coming: []
      }
    };
  },
  computed: {
    cominglistByDay() {
      var result = {};
      this.cominglist.coming.forEach(item => {
        if (!result[item.comingTitle]) {
          result[item.comingTitle] = [item];
        } else {
          result[item.comingTitle].push(item);
        }
      });
      return result;
    }
  },
  methods: {
    async scrollHandler(e) {
      if (e.target.scrollLeft + e.target.clientWidth >= e.target.scrollWidth) {
        let params = {
          ci: 51,
          limit: 10,
          offset: 10,
          token: ""
        };
        let result = await mostExpected(params);
        this.dataset.coming.push(...result.data.coming);
      }
    }
  },
  async created() {
    let rs = await comingList({
      ci: 1,
      token: "",
      limit: 10
    });
    this.cominglist = rs.data;
    let params = {
      ci: 51,
      limit: 10,
      offset: 0,
      token: ""
    };
    let result = await mostExpected(params);
    console.log(result);
    this.dataset = result.data;
    this.$nextTick(() => {
      this.$refs.scroll.addEventListener(
        "scroll",
        this.scrollHandler.bind(this)
      );
    });
  }
};
</script>
<style lang="scss" scoped>
.list-wrap {
  background-color: #f5f5f5;
}
.most-except {
  background-color: #fff;
  padding: 12px 0 12px 15px;
  margin-bottom: 10px;
  .title {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }
  .most-expected-list {
    overflow: scroll;
    white-space: nowrap;
  }
}
</style>
