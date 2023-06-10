<template>
 <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface IStudents {
  id: number,
  name: string,
  phoneNumber: string,
  age: number,
}

export default defineComponent({
  name: 'App',
});
</script>
