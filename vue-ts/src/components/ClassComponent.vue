<template>
  <div>
    <h3>类组件</h3>
    <h4>{{ cpymsg1 }}</h4>
    <button @click="show(1, '2')">事件</button>
    <h4>我是props + {{ p1 }} {{ p2 }}</h4>
    <h4>ref</h4>
    <div ref="box">box</div>
    <h4>指令</h4>
    <div v-direc1>direc1</div>
    <div v-direc1="'qq'">direc1</div>
    <h4>过滤器</h4>
    <div>{{ 'bmw3' | filt1}}</div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch, Ref } from "vue-property-decorator";
import { Person } from "../types";
@Component({
  directives: {
    //局部指令
    direc1: (el: HTMLElement, binding) => console.log("direct1", binding.value)
  },
  filters: {
    //局部过滤器
    filt1(data: string, arg: number = 2): string {
      return "自行车" + arg;
    }
  }
})
export default class ClassComponent extends Vue {
  @Prop() readonly p1!: string;
  @Prop({ default: "pp2", type: String }) readonly p2!: string;
  msg1: string = "高薪就业";
  msg2: string = "高薪就业" + this.p1;
  // msg3: undefined = undefined // 非响应式
  msg4: any = null; // 页面不渲染，响应式
  msg5: Person = {
    id: 1,
    name: "alex",
    age: 18
  };
  get cpymsg1(): string {
    return "计算属性" + this.msg1;
  }
  //属性检测
  @Watch("msg1")
  onMsg1Change(newValue: string, oldValue: string): void {
    console.log("msg1数据变化了", newValue, oldValue);
  }
  @Watch("msg5", { deep: true, immediate: true })
  onMsg5Change(newValue: string, oldValue: string): void {
    console.log("msg1数据变化了", newValue, oldValue);
  }
  //ref 引用元素
  @Ref("box") bbox!: HTMLDivElement;
  show(arg1: number, arg2: string): void {
    alert(arg1 + arg2);
  }
  mounted(): void {
    console.log("类组件", this.msg5);
  }
}
</script>