import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue';
import { IStore, IStudents, ICourses } from "@/interfaces";

export const store = createStore({
    state: {
        students: [] as IStudents[],
        courses: [] as ICourses[],
    },
    mutations: {
        'ADD_STUDENT'(state, newStudent: IStudents) {
            state.students.push(newStudent);
        }
    }
});

export const key: InjectionKey<Store<IStore>> = Symbol();