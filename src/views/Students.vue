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
      :header="headerTable"
      @removeRegister="removeRegister"
      @updateRegister="updateRegister"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import TableData from '../components/TableData.vue';
import { IStudents } from '../interfaces';
import { key } from '../store';

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
      headerTable: ['Id', 'Aluno', 'Número de telefone', 'Idade', 'Ações'],
    }
  },
  methods: {
    handleForm() {
      const student: IStudents = {
        id: this.id,
        name: this.name,
        phoneNumber: this.phoneNumber,
        age: this.age,
      }

      this.store.commit('ADD_CHANGE_STUDENT', student);

      this.id += 1;
      this.name = '';
      this.phoneNumber = '';
      this.age = 16;
    },

    removeRegister(id: number) {
      this.store.commit('REMOVE_STUDENT', id);

      this.id += 1;
      this.name = '';
      this.phoneNumber = '';
      this.age = 16;
    },
    
    updateRegister(register: IStudents) {
      const { id, name, phoneNumber, age } = register;

      this.id = id;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.age = age;
    }
  },
  setup() {
    const store = useStore(key);

    return {
      store, students: computed(() => store.state.students),
    }
  }
});
</script>
