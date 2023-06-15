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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  table {
    width: 100%;
  }

  .input-margin {
      margin: 1%;
  }

  .button-margin {
    margin: 1%;
  }

  .table th:not([align])  {
    text-align: center;
  }

  .font-bold {
    font-weight: 600;
  }

  .input-name, .input-course {
    width: 40%;
  }

  .input-phoneNumber {
    width: 20%;
  }

  .input-age, .input-duration {
    width: 20%;
  }
</style>