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

      console.log('Data: ', this.students);
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
</style>
