import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import StudentsView from '../views/Students.vue';

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Students',
    component: StudentsView,
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;