<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      date: ""
    };
  },
  methods: {
    add() {
      let params = {
        id: Math.ceil(Math.random() * 1000),
        name: this.name
      };
      this.$store.commit("ADD", params);
    }
  }
};
</script>
