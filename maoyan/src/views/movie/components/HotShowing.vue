<template>
  <div>
    <MovieItem v-for="item in dataSet.movieList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { movieOnInfoList } from "@/api/movie";
import MovieItem from "./MovieItem";
export default {
  name: "HotShowing",
  components: { MovieItem },
  data() {
    return {
      dataSet: {
        movieIds: [],
        movieList: [],
        total: 0
      }
    };
  },
  async created() {
    let result = await movieOnInfoList();
    this.dataSet = result.data
  }
};
</script>
