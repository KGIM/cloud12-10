/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606976835770_4318';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置数据库
  config.sequelize = {
    dialect: 'mariadb',
    host: '127.0.0.1',
    port: 3306,
    database: '12-10',
    username: 'root',
    password: 'root',
  };

  // 解决csrf攻击头部问题
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 配置白名单，允许跨域
    domainWhiteList: ['http://localhost:8080'],
  };

  // 配置jwt,之后使用jwt就可以使用这个密钥
  config.jwt = {
    secret: '123456', //自定义 token 的加密条件字符串
  };

  return {
    ...config,
    ...userConfig,
  };
};
