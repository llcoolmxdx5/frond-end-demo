<template>
  <div id="app">
    <TodoForm></TodoForm>
    <TodoLists></TodoLists>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import { mapActions } from "vuex"; // 2
export default {
  name: "TodoList",
  components: { TodoForm, TodoLists },
  created() {
    // this.$store.dispatch("getList") // 1
    this.getList(); // 2
  },
  methods: {
    ...mapActions(["getList"]) // 2
  }
};
</script>
