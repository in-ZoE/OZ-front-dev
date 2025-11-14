export default [
  {
    path: '/inquiry',
    meta: { layout: 'default' },
    children: [
      {
        path: '',
        name: 'InquiryList',
        component: () => import('@/pages/inquiry/InquiryListPage.vue'),
      },
      {
        path: 'new',
        name: 'InquiryCreate',
        component: () => import('@/pages/inquiry/InquiryCreatePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: ':id',
        name: 'InquiryDetail',
        component: () => import('@/pages/inquiry/InquiryDetailPage.vue'),
        props: true,
      },
      {
        path: ':id/edit',
        name: 'InquiryUpdate',
        component: () => import('@/pages/inquiry/InquiryUpdatePage.vue'),
        props: true,
        meta: { requiresAuth: true },
      },
    ],
  },
];
