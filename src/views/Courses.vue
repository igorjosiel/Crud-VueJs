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
      course: '',
      duration: 1,
      headerTable: ['Id', 'Curso', 'Duração', 'Ações'],
    }
  },
  methods: {
     handleForm() {
      const course: ICourses = {
        id: this.selectedIdCourse,
        course: this.course,
        duration: this.duration,
      }

      const courseFoundIndex = this.courses.findIndex(course => course.id === this.selectedIdCourse);

      // Se o índece do item for diferente de -1 signica que é uma alteração no item encontrado
      if (courseFoundIndex !== -1) {
        this.store.commit('UPDATE_COURSE', course);

        this.clearForm();
  
        return;
      }

      this.store.commit('ADD_COURSE', {
        ...course,
        id: this.currentIdCourse,
      });

      this.clearForm();
    },

    removeRegister(id: number) {
      this.store.commit('REMOVE_COURSE', id);
      this.store.commit('UPDATE_SELECTED_ID_COURSE', -1);

      this.clearForm();
    },
    
    fillUpFormWhenUpdateRegister(register: ICourses) {
      const { id, course, duration } = register;

      this.course = course;
      this.duration = duration;

      this.store.commit('UPDATE_SELECTED_ID_COURSE', id);
    },

    clearForm() {
      this.course = '';
      this.duration = 1;
    },
  },
  setup () {
    const store = useStore(key);

    return {
      store,
      courses: computed(() => store.state.courses),
      currentIdCourse: computed(() => store.state.currentIdCourse),
      selectedIdCourse: computed(() => store.state.selectedIdCourse),
    };
  }
});
</script>
