import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createRouter, createWebHistory, redirect } from 'vue-router';
import routes from './routes';
import jwt from 'jsonwebtoken';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由拦截
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  // 需要登录权限
  if (to.meta.requireAuth) {
    if (token) {
      // 需要登录、管理员权限
      if (to.meta.requireAdmin) {
        const admin = jwt.decode(token).admin;
        // 防止后台修改之后可以进入管理员界面
        if (admin == 1) {
          next();
        } else {
          alert('您无权查看');
        }
      }
      // 只需要登陆之后就能查看的东西
      else {
        next();
      }
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
