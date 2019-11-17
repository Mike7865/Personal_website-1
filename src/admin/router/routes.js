export default [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/About.vue'),
        meta: {
          title: 'Блок «Обо мне»',
        },
      },
      {
        path: '/works',
        component: () => import('../views/Works.vue'),
        meta: {
          title: 'Блок «Работы»',
        },
      },
      {
        path: '/reviews',
        component: () => import('../views/Reviews.vue'),
        meta: {
          title: 'Блок «Отзывы»',
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];