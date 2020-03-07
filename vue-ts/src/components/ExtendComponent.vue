<template>
  <div>
    <h3>扩展型组件</h3>
    <button @click="show(1, '2')">事件</button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      msg: 'q7'
    }
  },
  props:{
    pp1:{
      type:String,
      default:'默认值',
      required:false,
      // validator:(val:string)=>val.length>2
    }
  },
  methods: {
    show(arg1:number, arg2:string):void {
      alert(arg1 + arg2)
    }
  },
  mounted() {
    console.log('extend')
  }
})
</script>
