import { createRouter, createWebHistory } from 'vue-router';

export const routes = [{
    path: '/',
    name: 'Homepage',
    component: () => import('@/views/HomeView/HomeView.vue'),
}]

const router = createRouter({
	history: createWebHistory(),
    routes,
});

export default router;