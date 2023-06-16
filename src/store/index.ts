import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue';
import { IStore } from "@/interfaces";

export const store = createStore({
    state: {
        students: [{
            id: 0,
            name: 'Igor Josiel',
            phoneNumber: '(32) 999345623',
            age: 26,
        },
        {
            id: 1,
            name: 'Franciele de Paula',
            phoneNumber: '(32) 999345623',
            age: 23,
        }],
        courses: [{
            id: 0,
            course: 'Sistemas de Informação',
            duration: 2,
        }],
    },
});

export const key: InjectionKey<Store<IStore>> = Symbol();