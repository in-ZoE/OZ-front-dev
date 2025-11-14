export default [
  {
    path: '/user',
    meta: { layout: 'default', requiresAuth: true },
    children: [
      {
        path: '',
        name: 'UserPage',
        component: () => import('@/pages/mypage/UserPage.vue'),
      },
      {
        path: 'point',
        name: 'PointPage',
        component: () => import('@/pages/mypage/PointPage.vue'),
      },
      {
        path: 'asset',
        name: 'UserAssetEditPage',
        component: () => import('@/pages/mypage/UserAssetEditPage.vue'),
      },
      {
        path: 'mbti',
        name: 'UserMbtiEditPage',
        component: () => import('@/pages/mypage/UserMbtiEditPage.vue'),
      },
      {
        path: 'password',
        name: 'UserPasswordEditPage',
        component: () => import('@/pages/mypage/UserPasswordEditPage.vue'),
      },
      {
        path: 'withdraw',
        name: 'UserWithdrawPage',
        component: () => import('@/pages/mypage/UserWithdrawPage.vue'),
      },
    ],
  },
];
