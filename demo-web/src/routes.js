const routes = [
  {
    path: '/',
    component: () => import('page/Home.vue'),
    // children: [],
  },
  {
    path: '/user',
    component: () => import('page/UserManager.vue'),
    meta: {
      requireAuth: true,
      requireAdmin: true,
    },
  },
  {
    path: '/person',
    component: () => import('page/Person.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    component: () => import('page/Login.vue'),
  },
  {
    path: '/create',
    component: () => import('components/Form'),
  },
];

export default routes;
