<template>
  <main>
    <form @submit.prevent="handleForm">
      <input
        class="input is-normal is-info"
        type="text"
        placeholder="Aluno"
        v-model="name"
        required
      >
      <input
        class="input is-normal is-info"
        type="text"
        placeholder="(XX) XXXXX-XXXX"
        v-model="phoneNumber"
        required
      >
      <input
        class="input is-normal is-info"
        type="number"
        v-model="age"
        required
        max="100"
        min="16"
      >
      <button type="submit">Clique</button>

      <TableData :registers="students" />
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableData from './components/TableData.vue';

export interface IStudents {
  name: string,
  phoneNumber: string,
  age: number,
}

export default defineComponent({
  name: 'App',
  components: {
    TableData,
  },
  data () {
    return {
      name: '',
      phoneNumber: '',
      age: 16,
      students: [] as IStudents[]
    }
  },
  methods: {
    handleForm() {
      const newStudent: IStudents = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        age: this.age,
      }

      this.students.push(newStudent);

      this.name = '';
      this.phoneNumber = '',
      this.age = 16;
    }
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

.table th:not([align])  {
  text-align: center;
}

.lightgray {
  background: lightgray;
}

.white {
  background: whitesmoke;
}
</style>
