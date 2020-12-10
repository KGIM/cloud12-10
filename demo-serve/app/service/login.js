const Service = require('egg').Service;

class LoginService extends Service {
  async login() {
    const { account, password } = this.ctx.request.body;
    // 根据account获取到用户信息
    const user = await this.ctx.model.query(
      'select * from login where account=:account',
      {
        replacements: {
          account,
        },
      }
    );
    // console.log(user);
    // 为空则表示不存在
    if (user[0].length === 0) {
      console.log("this account isn't exists");
      return { message: '不存在此用户', account, password };
    } else {
      // 获取到对象里面的数据
      const obj = user[0][0];
      // 对比错误
      if (obj.password !== password) {
        console.log('wrong password');
        return { message: '密码错误', account, password };
      } else {
        const admin = obj.admin;
        console.log('success login');
        return { message: '成功登陆', account, password, admin };
      }
    }
  }
}

module.exports = LoginService;
