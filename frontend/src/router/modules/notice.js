export default [
  {
    path: '/notice',
    meta: { layout: 'default' },
    children: [
      {
        path: '',
        name: 'NoticeList',
        component: () => import('@/pages/notice/NoticeListPage.vue'),
      },
      {
        path: 'new',
        name: 'NoticeCreate',
        component: () => import('@/pages/notice/NoticeCreatePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: ':id',
        name: 'NoticeDetail',
        component: () => import('@/pages/notice/NoticeDetailPage.vue'),
        props: true,
      },
      {
        path: ':id/edit',
        name: 'NoticeUpdate',
        component: () => import('@/pages/notice/NoticeUpdatePage.vue'),
        props: true,
        meta: { requiresAuth: true },
      },
    ],
  },
];
