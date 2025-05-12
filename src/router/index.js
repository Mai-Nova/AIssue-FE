import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 라우터 정의
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
