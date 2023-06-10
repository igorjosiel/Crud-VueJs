<template>
  <main>
    <form @submit.prevent="handleForm" class="box">
      <input
        class="input is-normal is-info input-name input-margin"
        type="text"
        placeholder="Aluno"
        v-model="name"
        required
      >
      <input
        class="input is-normal is-info input-phoneNumber input-margin"
        type="text"
        placeholder="(XX) XXXXX-XXXX"
        v-model="phoneNumber"
        required
      >
      <input
        class="input is-normal is-info input-age input-margin"
        type="number"
        v-model="age"
        required
        max="100"
        min="16"
      >

      <button class="button is-info font-bold button-margin" type="submit">Salvar</button>
    </form>

    <TableData
        :registers="students"
        @removeRegister="removeRegister"
        @updateRegister="updateRegister"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableData from '../components/TableData.vue';

export interface IStudents {
  id: number,
  name: string,
  phoneNumber: string,
  age: number,
}

export default defineComponent({
  name: 'StudentsView',
  components: {
    TableData,
  },
  data () {
    return {
      id: 0,
      name: '',
      phoneNumber: '',
      age: 16,
      students: [] as IStudents[]
    }
  },
  methods: {
    handleForm() {
      const studentFoundIndex = this.students.findIndex(student => student.id === this.id);

      if (studentFoundIndex !== -1) {
        const newData = {
          id: this.id,
          name: this.name,
          phoneNumber: this.phoneNumber,
          age: this.age,
        }

        this.students[studentFoundIndex] = newData;

        this.id += 1;
        this.name = '';
        this.phoneNumber = '';
        this.age = 16;

        return;
      }

      const newStudent: IStudents = {
        id: this.id,
        name: this.name,
        phoneNumber: this.phoneNumber,
        age: this.age,
      }

      this.students.push(newStudent);

      this.id += 1;
      this.name = '';
      this.phoneNumber = '';
      this.age = 16;
    },

    removeRegister(id: number) {
      const newList = this.students.filter(eachRegister => eachRegister.id !== id);

      this.students = newList;
    },
    
    updateRegister(register: IStudents) {
      const { id, name, phoneNumber, age } = register;

      this.id = id;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.age = age;
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

.input-name {
    width: 40%;
}

.input-phoneNumber {
    width: 20%;
}

.input-age {
    width: 20%;
}
</style>
