<template>
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Aluno</th>
        <th>Número de telefone</th>
        <th>Idade</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(register, index) in registers"
        :key="register.id"
        :class="index % 2 === 0 ? 'lightgray' : 'withe'"
      >
        <td v-for="(value, key) in register" :key="key">{{ value }}</td>
        <td class="container-actions">
          <i class="fa-solid fa-trash fa-lg red" @click="remove(register.id)"></i>
          <i class="fa-sharp fa-solid fa-pen fa-lg blue" @click="update(register)"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IStudents } from '../views/Students.vue';

export default defineComponent({
  name: 'TableData',
  emits: ['removeRegister', 'updateRegister'],
  props: {
    registers: {
      type: Array as PropType<IStudents[]>,
      required: true,
    }
  },
  methods: {
    remove(id: number) {
      this.$emit('removeRegister', id);
    },

    update(register: IStudents) {
      this.$emit('updateRegister', register);
    }
  }
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
  
  .lightgray {
    background: lightgray;
  }

  .white {
    background: whitesmoke;
  }
</style>