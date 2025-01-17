import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/index.vue';
import AboutView from '@/views/About.vue'; // 회사 소개 페이지
import TechnologiesView from '@/views/Technologies.vue'; // 주요 기술 페이지
import ContactView from '@/views/Contact.vue'; // 문의하기 페이지

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView, // 회사 소개 컴포넌트
  },
  {
    path: '/technologies',
    name: 'technologies',
    component: TechnologiesView, // 주요 기술 컴포넌트
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView, // 문의하기 컴포넌트
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
