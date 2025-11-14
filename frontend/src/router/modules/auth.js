export default [
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/pages/auth/LoginPage.vue'),
    meta: { layout: 'none', requiresAuth: false },
  },
  {
    path: '/auth/kakao/callback',
    name: 'KakaoCallback',
    component: () => import('@/pages/auth/KakaoCallbackPage.vue'),
    meta: { layout: 'none', requiresAuth: false },
  },
  {
    path: '/signup/step1',
    name: 'SignupStep1',
    component: () => import('@/pages/auth/SignupStep1.vue'),
    meta: { layout: 'none', requiresAuth: false },
  },
  {
    path: '/signup/step2',
    name: 'SignupStep2',
    component: () => import('@/pages/auth/SignupStep2.vue'),
    meta: { layout: 'none', requiresAuth: false },
  },
  {
    path: '/signup/step3',
    name: 'SignupStep3',
    component: () => import('@/pages/auth/SignupStep3.vue'),
    meta: { layout: 'none', requiresAuth: false },
  },
];
