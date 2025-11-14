export default [
  {
    path: '/product',
    meta: { layout: 'default', requiresAuth: true },
    children: [
      {
        path: '',
        name: 'ProductRecommendPage',
        component: () => import('@/pages/product/ProductRecommendPage.vue'),
      },
      {
        path: ':id',
        name: 'ProductDetailPage',
        component: () => import('@/pages/product/ProductDetailPage.vue'),
        props: true,
      },
    ],
  },
];
