'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, jwt } = app;

  // 登录注册功能
  router.post('/auth/login', controller.login.index);
  // 权限管理
  router.post('/auth/create', jwt, controller.auth.create);
  router.post('/auth/delete', jwt, controller.auth.delete);
  router.post('/auth/nodify', jwt, controller.auth.nodify);
  router.get('/auth/retrieveall', jwt, controller.auth.queryall);
  router.post('/auth/retrieve', jwt, controller.auth.query);
};
