const Service = require('egg').Service;

class Retrieve extends Service {
  // async query() {
  //   const { admin } = this.ctx.query;
  //   if (admin == 1) {
  //     const result = await this.ctx.model.query(
  //       'select * from login where admin=:admin',
  //       {
  //         replacements: { admin },
  //       }
  //     );
  //     return result[0];
  //   } else {
  //     this.ctx.status = 400;
  //     return this.ctx.status;
  //   }
  // }

  // 查询所有数据库信息
  async queryall() {
    // console.log(this.ctx.state.user);
    // 所有解密的数据都是存放在this.ctx.state.user里面
    if (this.ctx.state.user.admin === 1) {
      const result = await this.ctx.model.query('select * from login');
      return result[0];
    } else {
      this.ctx.status = 400;
      return this.ctx.status;
    }
  }
}

module.exports = Retrieve;
