<template>
  <div id="scroll-wrapper">
    <div>
      <MovieItem v-for="item in dataSet.movieList" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Indicator } from "mint-ui";
import "mint-ui/lib/style.min.css";
import { movieOnInfoList, moreComingList } from "@/api/movie";
import MovieItem from "./MovieItem";

BScroll.use(Pullup);
export default {
  name: "HotShowing",
  components: { MovieItem },
  data() {
    return {
      startIndex: 12,
      pageSize: 10,
      dataSet: {
        movieIds: [],
        movieList: [],
        total: 0
      }
    };
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll("#scroll-wrapper", {
        scrollY: true,
        click: true,
        probeType: 3, // listening scroll hook
        pullUpLoad: true
      });
      this.scroll.on("pullingUp", () => {
        this.moreComingList({
          token: "",
          movieIds: this.dataSet.movieIds
            .slice(this.startIndex, this.startIndex + this.pageSize)
            .join(",")
        });
      });
      this.scroll.on("scroll", position => {
        if (position.y < -63) {
          this.$store.commit("UPDATE_DOWNLOAD_STATUS", false);
        } else {
          this.$store.commit("UPDATE_DOWNLOAD_STATUS", true);
        }
      });
    },
    async moreComingList(params) {
      if (this.dataSet.movieList.length === this.dataSet.total) {
        this.scroll.finishPullUp();
        this.scroll.refresh();
        return;
      }
      Indicator.open();
      let result = await moreComingList(params);
      this.dataSet.movieList.push(...result.data.coming);
      this.scroll.finishPullUp();
      this.scroll.refresh();
      Indicator.close();
      this.startIndex += this.pageSize;
    }
  },
  async created() {
    let result = await movieOnInfoList();
    this.dataSet = result.data;
    this.$nextTick(() => {
      this.initScroll();
      this.scroll.finishPullUp();
      this.scroll.refresh();
    });
  }
};
</script>
