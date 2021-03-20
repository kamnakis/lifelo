import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/pages/Landing.vue')
  },
  {
    path: '/l/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Feed.vue') },
      { path: 'guidance', component: () => import('src/pages/Guidance.vue') },
      { path: 'courses', component: () => import('src/pages/Courses.vue') },
      { path: 'profile/:id', component: () => import('src/pages/Profile.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
