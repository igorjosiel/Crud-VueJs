<template>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
  .main-content {
    width: 75%;
    margin-left: 25%;
  }
</style>
