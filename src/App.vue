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
            v-for="(student, index) in students"
            :key="index"
            :class="index % 2 === 0 ? 'lightgray' : 'withe'"
          >
            <td>{{ student.name }}</td>
            <td>{{ student.phoneNumber }}</td>
            <td>{{ student.age }}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface IStudents {
  name: string,
  phoneNumber: string,
  age: number,
}

export default defineComponent({
  name: 'App',
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
        age: this.age,
        phoneNumber: this.phoneNumber,
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
