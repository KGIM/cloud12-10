const Controller = require('egg').Controller;

class AuthController extends Controller {
  // 查找数据
  async queryall() {
    const result = await this.ctx.service.retrieve.queryall();
    this.ctx.body = result;
  }
  async query() {
    // this.ctx.body = 123;
    const result = await this.ctx.service.retrieve.query();
    this.ctx.body = result;
  }
  // 增加数据
  async create() {
    await this.ctx.service.create.index();
  }
  // 删除数据
  async delete() {
    await this.ctx.service.delete.index();
  }
  // 修改数据
  async nodify() {
    await this.ctx.service.nodify.index();
  }
}

module.exports = AuthController;
