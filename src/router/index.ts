import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import StudentsView from '../views/Students.vue';
import Courses from '../views/Courses.vue';

const routes: RouteRecordRaw[] = [{
    path: '/students',
    name: 'Students',
    component: StudentsView,
},
{
    path: '/courses',
    name: 'Courses',
    component: Courses
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;