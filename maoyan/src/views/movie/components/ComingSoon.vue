<template>
  <div class="list-wrap">
    <div class="most-except">
      <p class="title">近期最受期待</p>
      <div class="most-expected-list">
        <MostExceptItem v-for="item in dataset.coming" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import MostExceptItem from "./MostExceptItem";
import { mostExpected } from "@/api/movie";
export default {
  name: "ComingSoon",
  components: { MostExceptItem },
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
      }
    };
  },
  async created() {
    let params = {
      ci: 51,
      limit: 10,
      offset: 0,
      token: ""
    };
    let result = await mostExpected(params);
    console.log(result);
    this.dataset = result.data;
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
