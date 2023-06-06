<template>
  <table class="table">
    <thead>
      <tr>
        <th>Aluno</th>
        <th>Número de telefone</th>
        <th>Idade</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(register, index) in registers"
        :key="index"
        :class="index % 2 === 0 ? 'lightgray' : 'withe'"
      >
        <td v-for="(value, key) in register" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IStudents } from '../App.vue'

export default defineComponent({
  name: 'TableData',
  props: {
    registers: {
      type: [] as PropType<IStudents[]>,
      required: true,
    }
  },
});
</script>