<template>
  <div>
    <table>
      <tr>
        <td>ID</td>
        <td>名称</td>
        <td>操作</td>
      </tr>
      <ListItem v-for="item in dataList" :key="item.id" :item="item"></ListItem>
    </table>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import { mapState } from "vuex";
export default {
  name: "TodoLists",
  components: { ListItem },
  computed: {
    ...mapState(["dataList"])
  }
};
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  width: 500px;
  tr td {
    padding: 3px;
    border: 1px solid #eeeeee;
  }
}
</style>
