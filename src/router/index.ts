import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/index.vue';
import AboutView from '@/views/About.vue'; // 회사 소개 페이지
import TechnologiesView from '@/views/Technologies.vue'; // 주요 기술 페이지
import ContactView from '@/views/Contact.vue'; // 문의하기 페이지
import article from '@/views/Article.vue'; // 문의하기 페이지


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

  {
    path: '/article',
    name: 'pr',
    component: article, // 문의하기 컴포넌트
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 이전 위치로 돌아가는 경우
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // 새로운 페이지로 이동할 때 스크롤을 최상단으로 이동
    }
  },
});


export default router;
