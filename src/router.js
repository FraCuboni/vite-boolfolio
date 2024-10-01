
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Posts from './pages/Posts.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
