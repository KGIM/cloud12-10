import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createRouter, createWebHistory, redirect } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({
        // 设定跳转的路径
        path: '/login',
        // query: {
        //   redirect: '',
        // },
      });
    }
  } else {
    next();
  }
});

// 使用vue-router
createApp(App)
  .use(router)
  .mount('#app');
