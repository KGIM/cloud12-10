const Service = require('egg').Service;

class CreateService extends Service {
  async index() {
    const { account, password, newAdmin } = this.ctx.request.body;
    const { admin } = this.ctx.state.user;
    if (account && password && admin == 1) {
      await this.ctx.model.query(
        'insert into login (account, password, admin) values (:account, :password, :newAdmin)',
        {
          replacements: {
            account,
            password,
            newAdmin,
          },
        }
      );
      this.ctx.body = 1500;
      return this.ctx.body;
    }
  }
}

module.exports = CreateService;
