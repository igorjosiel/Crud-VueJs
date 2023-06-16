import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue';
import { IStore, IStudents, ICourses } from "@/interfaces";

export const store = createStore({
    state: {
        students: [] as IStudents[],
        courses: [] as ICourses[],
    },
    mutations: {
        'ADD_CHANGE_STUDENT'(state, newDataStudent: IStudents) {
            const studentFoundIndex = state.students.findIndex(student => student.id === newDataStudent.id);

            // Se o índece do item for diferente de -1 signica que é uma alteração no item encontrado
            if (studentFoundIndex !== -1) {
                state.students[studentFoundIndex] = newDataStudent;
        
                return;
            }

            state.students.push(newDataStudent);
        },
        'REMOVE_STUDENT'(state, id: number) {
            const newListOfStudents = state.students.filter(student => student.id !== id);

            state.students = newListOfStudents;
        },

        'ADD_CHANGE_COURSE'(state, newDataCourse: ICourses) {
            const courseFoundIndex = state.courses.findIndex(course => course.id === newDataCourse.id);

            // Se o índece do item for diferente de -1 signica que é uma alteração no item encontrado
            if (courseFoundIndex !== -1) {
                state.courses[courseFoundIndex] = newDataCourse;
        
                return;
            }

            state.courses.push(newDataCourse);
        },
        'REMOVE_COURSE'(state, id: number) {
            const newListOfCourses = state.courses.filter(course => course.id !== id);

            state.courses = newListOfCourses;
        },
    }
});

export const key: InjectionKey<Store<IStore>> = Symbol();