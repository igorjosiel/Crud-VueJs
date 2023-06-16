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
      @updateRegister="updateRegister"
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

      this.store.commit('ADD_CHANGE_COURSE', course);

      this.id += 1;
      this.course = '';
      this.duration = 1;
    },

    removeRegister(id: number) {
      const newList = this.courses.filter(eachRegister => eachRegister.id !== id);

      this.courses = newList;
    },
    
    updateRegister(register: ICourses) {
      const { id, course, duration } = register;

      this.id = id;
      this.course = course;
      this.duration = duration;
    }
  },
  setup () {
    const store = useStore(key);

    return {
      store, courses: computed(() => store.state.courses),
    }
  }
});
</script>
