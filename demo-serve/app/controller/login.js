const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const result = await this.ctx.service.login.login();
    if (result.message !== '成功登陆') {
      // 设置body就是返回数据给前端
      this.ctx.body = { message: result.message };
      this.ctx.status = 2000;
    } else {
      // 加密token
      /**
       * 因为在plugin、config进行了jwt的搭建，所以直接使用app.jwt
       */
      const token = this.app.jwt.sign(
        {
          account: result.account,
          admin: result.admin,
        },
        // 为什么没有将密钥抽离出来，因为之后解密是在app里面解密，使用config里面的密钥进行加密，所以如果抽离出来就会出现无法解密，invalid signature
        this.app.config.jwt.secret,
        // 配置过期时间
        {
          expiresIn: '1h',
        }
      );
      this.ctx.body = token;
    }
  }
}

module.exports = LoginController;
