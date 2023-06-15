<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <NavBar />
    </div>
    <div class="column is-four-fifth">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
});
</script>