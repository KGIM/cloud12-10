const Service = require('egg').Service;

class DeleteService extends Service {
  async index() {
    // 要删除的用户等级
    const { account } = this.ctx.request.body;
    // 这个是解密后获取到的当前用户的等级
    const { admin } = this.ctx.state.user;
    if (admin == 1 && account) {
      await this.ctx.model.query('delete from login where account=:account', {
        replacements: {
          account,
        },
      });
      this.ctx.body = 2000;
      return this.ctx.body;
    } else {
      return '权限不足';
    }
  }
}

module.exports = DeleteService;
