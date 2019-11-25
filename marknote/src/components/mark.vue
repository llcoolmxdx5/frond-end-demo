<template>
  <div id="notebook">
    <aside class="side-bar">
      <div class="toolbar">
        <button>
          <i class="material-icons">add</i>Add note
        </button>
      </div>
    </aside>
    <section class="main">
      <textarea v-model="content"></textarea>
    </section>
    <aside class="preview" v-html="notePreview"></aside>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "marked",
  created() {
    this.content =
      localStorage.getItem("content") || "你现在能用**markdown**写作";
  },
  data() {
    return {
      content: "this is a **note**",
      notes: []
    };
  },
  computed: {
    notePreview() {
      return marked(this.content);
    }
  },
  methods: {
    saveNote(val) {
      localStorage.setItem("content", val);
    },
    addNote() {
      let time = Date.now();
      let note = {
        id: String(time),
        title: `新笔记${this.notes.length + 1}`,
        content: "**Hi!**, 这是一个Markdown笔记",
        created: time,
        favorite: false
      };
      this.notes.push(note);
    }
  },
  watch: {
    content: {
      handler: "saveNote" // 可简写为 content：'saveNote' 在没有immediate deep时
      // immediate: true, // 立即触发调用处理函数 默认false
      // deep: true // 以递归的方式侦听嵌套对象内部的变化 默认false
    }
  }
};
</script>
