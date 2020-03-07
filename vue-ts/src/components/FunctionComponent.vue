<template functional>
  <div>
    <h3>函数式组件</h3>
    <h4>props</h4>
    <div>{{ props.bb1 }}</div>
    <h4>事件</h4>
    <button @click="parent.show(121)">按钮</button>
  </div>
</template>

