<template>
  <table class="table">
    <thead>
      <tr>
        <th>Aluno</th>
        <th>Número de telefone</th>
        <th>Idade</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(register, index) in registers"
        :key="index"
        :class="index % 2 === 0 ? 'lightgray' : 'withe'"
      >
        <td v-for="(value, key) in register" :key="key">{{ value }}</td>
        <td class="container-actions">
          <i class="fa-solid fa-trash fa-lg red"></i>
          <i class="fa-sharp fa-solid fa-pen fa-lg blue"></i>
        </td>
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

<style scoped>
  .container-actions > i:first-child {
    margin-right: 15px;
  }

  i:hover {
    cursor: pointer;
  }

  .red {
    color: rgba(255, 0, 0, 0.505);
  }

  .blue {
    color: rgb(64, 136, 194);
  }
</style>