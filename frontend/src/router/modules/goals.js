export default [
  {
    path: '/goals',
    meta: { layout: 'default', requiresAuth: true },
    children: [
      {
        path: '',
        name: 'GoalListPage',
        component: () => import('@/pages/goal/GoalPage.vue'),
      },
      {
        path: 'new',
        name: 'GoalCreatePage',
        component: () => import('@/pages/goal/GoalCreatePage.vue'),
      },
      {
        path: ':id',
        name: 'GoalDetailPage',
        component: () => import('@/pages/goal/GoalDetailPage.vue'),
        props: true,
      },
      {
        path: ':id/edit',
        name: 'GoalEditPage',
        component: () => import('@/pages/goal/GoalEditPage.vue'),
        props: true,
      },
    ],
  },
];
