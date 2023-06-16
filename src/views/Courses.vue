<template>
  <main>
    <form @submit.prevent="handleForm" class="box">
      <input
        class="input is-normal is-info input-course input-margin"
        type="text"
        placeholder="Curso"
        v-model="course"
        required
      >
      <input
        class="input is-normal is-info input-duration input-margin"
        type="number"
        v-model="duration"
        required
        max="5"
        min="1"
      >

      <button class="button is-info font-bold button-margin" type="submit">Salvar</button>
    </form>

    <TableData
      :registers="courses"
      :header="headerTable"
      @removeRegister="removeRegister"
      @updateRegister="fillUpFormWhenUpdateRegister"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import TableData from '../components/TableData.vue';
import { ICourses } from '../interfaces';
import { key } from '@/store';

export default defineComponent({
  name: 'CoursesView',
  components: {
    TableData,
  },
  data () {
    return {
      id: 0,
      course: '',
      duration: 1,
      headerTable: ['Id', 'Curso', 'Duração', 'Ações'],
    }
  },
  methods: {
     handleForm() {
      const course: ICourses = {
        id: this.id,
        course: this.course,
        duration: this.duration,
      }

      const courseFoundIndex = this.courses.findIndex(course => course.id === this.id);

      // Se o índece do item for diferente de -1 signica que é uma alteração no item encontrado
      if (courseFoundIndex !== -1) {
        this.store.commit('UPDATE_COURSE', course);

        this.clearForm('update');
  
        return;
      }

      this.store.commit('ADD_COURSE', course);

      this.clearForm('add');
    },

    removeRegister(id: number) {
      this.store.commit('REMOVE_COURSE', id);

      this.clearForm('delete');
    },
    
    fillUpFormWhenUpdateRegister(register: ICourses) {
      const { id, course, duration } = register;

      this.id = id;
      this.course = course;
      this.duration = duration;
    },

    clearForm(option: 'add' | 'delete' | 'update') {
      this.course = '';
      this.duration = 1;

      if (option === 'add') {
        this.id += 1;
      }
    },
  },
  setup () {
    const store = useStore(key);

    return {
      store, courses: computed(() => store.state.courses),
    }
  }
});
</script>
