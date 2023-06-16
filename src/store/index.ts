import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue';
import { IStore, IStudents, ICourses } from "@/interfaces";

export const store = createStore({
    state: {
        idStudent: 0,
        idCourse: 0,
        students: [] as IStudents[],
        courses: [] as ICourses[],
    },
    mutations: {
        'ADD_STUDENT'(state, newStudent: IStudents) {
            state.students.push(newStudent);

            state.idStudent += 1;
        },

        'UPDATE_STUDENT'(state, newDataStudent: IStudents) {
            state.students[newDataStudent.id] = newDataStudent;
        },

        'REMOVE_STUDENT'(state, id: number) {
            const newListOfStudents = state.students.filter(student => student.id !== id);

            state.students = newListOfStudents;
        },

        'ADD_COURSE'(state, newCourse: ICourses) {
            state.courses.push(newCourse);

            state.idCourse += 1;
        },

        'UPDATE_COURSE'(state, newDataCourse: ICourses) {
            state.courses[newDataCourse.id] = newDataCourse;
        },

        'REMOVE_COURSE'(state, id: number) {
            const newListOfCourses = state.courses.filter(course => course.id !== id);

            state.courses = newListOfCourses;
        },
    }
});

export const key: InjectionKey<Store<IStore>> = Symbol();