import { createStore, Store } from "vuex";
import { InjectionKey } from 'vue';
import { IStore } from "@/interfaces";

export const store = createStore({
    state: {
        students: [],
        courses: [],
    },
});

export const key: InjectionKey<Store<IStore>> = Symbol();