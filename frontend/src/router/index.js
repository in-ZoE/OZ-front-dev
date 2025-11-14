import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import HomePage from '@/pages/HomePage.vue';
import { userAuthStore } from '@/stores/auth';

// 모듈 라우트 import
import authRoutes from './modules/auth';
import userRoutes from './modules/user';
import goalsRoutes from './modules/goals';
import inquiryRoutes from './modules/inquiry';
import noticeRoutes from './modules/notice';
import productRoutes from './modules/product';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 공통 페이지
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: { layout: 'default' },
    },
    {
      path: '/terms',
      name: 'TermsPage',
      component: () => import('@/pages/term/TermsPage.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/find-password',
      name: 'FindPasswordPage',
      component: () => import('@/pages/auth/FindPasswordPage.vue'),
      meta: { layout: 'default' },
    },

    // 도메인별 모듈 라우트
    ...authRoutes,
    ...userRoutes,
    ...goalsRoutes,
    ...inquiryRoutes,
    ...noticeRoutes,
    ...productRoutes,
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      };
    }
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

// 전역 가드: 인증 처리
router.beforeEach((to) => {
  const authStore = userAuthStore();
  const isLogin = authStore.isLogin;

  if (to.meta.requiresAuth && !isLogin) {
    alert('로그인이 필요합니다.');

    return {
      path: '/auth/login',
      query: { redirect: to.fullPath },
    };
  }
});

// 라우트 변경 후 스크롤 상단으로
router.afterEach((to, from) => {
  nextTick(() => {
    if (to.path !== from.path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

export default router;
