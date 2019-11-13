export default [
  {
    path: '/',
    component: () => import('../components/pages/About.vue'),
    meta: {
      title: 'Блок «Обо мне»',
    },
  },
  {
    path: '/works',
    component: () => import('../components/pages/Works.vue'),
    meta: {
      title: 'Блок «Работы»',
    },
  },
  {
    path: '/reviews',
    component: () => import('../components/pages/Reviews.vue'),
    meta: {
      title: 'Блок «Отзывы»',
    },
  },
  {
    path: '/login',
    component: () => import('../components/pages/Login.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];