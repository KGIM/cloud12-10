'use strict';

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;
  const Login = app.model.define('login', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    account: STRING,
    password: STRING,
    admin: INTEGER,
  });

  return Login;
};
