<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <ul class="navbar-brand">
            <router-link to="/students" class="navbar-item">
                Alunos
            </router-link>

            <hr class="navbar-divider">

            <router-link to="/courses" class="navbar-item">
                Cursos
            </router-link>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableData',
});
</script>

<style scoped>
  nav {
    background: lightgray;
  }

  .navbar-brand {
    flex-direction: column;
    justify-content: center;
  }

  .navbar-divider {
    display: block;
    background: #3e8ed0;
  }

  .navbar, .navbar-end, .navbar-menu, .navbar-start {
    display: flex;
    justify-content: center;
  }
</style>