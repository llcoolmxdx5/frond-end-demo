<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>
      <input :value="item.name" ref="name" v-if="item.isEdit" />
      <span v-else>{{ item.name }}</span>
    </td>
    <td>
      <div v-if="!item.isEdit">
        <button @click="handleEdit(item.id)">编辑</button>
        <button @click="handleDel(item.id)">删除</button>
      </div>
      <div v-else>
        <button @click="handleSubmit(item.id)">提交</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ListItem",
  props: ["item"],
  methods: {
    handleDel(id) {
      this.$store.commit("DEL", id);
    },
    handleSubmit(id) {
      this.$store.commit("UPDATE", {
        id,
        status: false,
        name: this.$refs.name.value
      });
    },
    handleEdit(id) {
      this.$store.commit("UPDATE_STATUS", { id, status: true });
    }
  }
};
</script>
