<template>
  <div>
    <HeaderBar>
      <template #back>
        <i class="icon-back" @click="$router.go(-1)"></i>
      </template>
    </HeaderBar>
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  components: { HeaderBar }
};
</script>
