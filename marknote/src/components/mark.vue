<template>
  <div id="notebook">
    <aside class="side-bar">
      <div class="toolbar">
        <button @click="addNote" :title="notes.length + ' notes(s) already'">
          <i class="material-icons">add</i>Add note
        </button>
        <div class="notes">
          <div
            class="note"
            v-for="(note, index) of sortedNotes"
            :key="index"
            :class="{ selected: note === selectedNote }"
            @click="selectNote(note)"
          >
            <i class="material-icons" v-if="note.favorite">star</i>
            {{note.title}}
          </div>
        </div>
      </div>
    </aside>
    <template v-if="selectedNote">
      <section class="main">
        <div class="toolbar">
          <input type="text" v-model="selectedNote.title" placeholder="笔记标题" />
          <button @click="favoriteNote" title="收藏笔记">
            <i class="material-icons">{{ selectedNote.favorite ? 'star' : 'star_border' }}</i>
          </button>
          <button @click="removeNote" title="删除笔记">
            <i class="material-icons">delete</i>
          </button>
        </div>
        <textarea v-model="selectedNote.content"></textarea>
        <div class="toolbar status-bar">
          <span class="date">
            <span class="label">创建于&nbsp;</span>
            <span class="value">{{ selectedNote.created | date }}</span>
          </span>
          <span class="lines">
            <span class="label">&nbsp;行数：</span>
            <span class="value">{{ linesCount }}</span>
          </span>
          <span class="words">
            <span class="label">&nbsp;词数：</span>
            <span class="value">{{ wordsCount }}</span>
          </span>
          <span class="characters">
            <span class="label">&nbsp;总字符数：</span>
            <span class="value">{{ charactersCount }}</span>
          </span>
        </div>
      </section>
      <aside class="preview" v-html="notePreview"></aside>
    </template>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "marked",
  // created() {
  //   this.content =
  //     localStorage.getItem("content") || "你现在能用**markdown**写作";
  // },
  data() {
    return {
      // content: "this is a **note**",
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      selectedId: localStorage.getItem("selected-id") || null
    };
  },
  computed: {
    notePreview() {
      return this.selectedId ? marked(this.selectedNote.content) : "";
    },
    selectedNote() {
      return this.notes.find(note => note.id === this.selectedId);
    },
    sortedNotes() {
      return this.notes
        .slice()
        .sort((a, b) => a.created - b.created)
        .sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1));
    },
    linesCount() {
      return this.selectedNote.content.split(/\r\n|\r|\n/).length;
    },
    wordsCount() {
      let s = this.selectedNote.content;
      s = s.replace(/\n/g, " "); // 换行符转空格
      s = s.replace(/(^\s*)|(\s*$)/gi, ""); // 排除开头 结尾空格
      s = s.replace(/\s\s+/gi, " "); // 多个重复空格转为一个
      return s.split(" ").length;
    },
    charactersCount() {
      return this.selectedNote.content.split("").length;
    }
  },
  methods: {
    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
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
    },
    selectNote(note) {
      this.selectedId = note.id;
    },
    removeNote() {
      if (this.selectedNote && confirm("确认删除此笔记吗")) {
        let index = this.notes.indexOf(this.selectedNote);
        if (index !== -1) {
          this.notes.splice(index, 1);
        }
      }
    },
    favoriteNote() {
      this.selectedNote.favorite ^= true;
    }
  },
  watch: {
    notes: {
      handler: "saveNotes", // 可简写为 content：'saveNote' 在没有immediate deep时
      // immediate: true, // 立即触发调用处理函数 默认false
      deep: true // 以递归的方式侦听嵌套对象内部的变化 默认false
    },
    selectedId(val) {
      localStorage.setItem("selected-id", val);
    }
  }
};
</script>
