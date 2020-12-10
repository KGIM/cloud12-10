const Service = require('egg').Service;

class NodifyService extends Service {
  async index() {
    const { account } = this.ctx.request.body;
    const { admin } = this.ctx.state.user;
    if (account && admin == 1) {
      await this.ctx.model.query(
        'update login set admin=1 where account=:account',
        {
          replacements: {
            account,
          },
        }
      );
      // 返回状态码1000，代表修改成功
      this.ctx.body = 1000;
      return this.ctx.body;
    }
  }
}

module.exports = NodifyService;
