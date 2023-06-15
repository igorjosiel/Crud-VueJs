<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <ul class="navbar-brand">
          <li>
            <router-link to="/students" class="navbar-item">
              Alunos
            </router-link>

            <hr class="navbar-divider">
            
            <router-link to="/courses" class="navbar-item">
              Cursos
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-four-fifth">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
  nav {
    background: lightgray;
  }

  .navbar-brand {
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
