const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:7001/api',
    //     changeOrigin: true,
    //   },
    // },
  },
  // 配置路径别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('page', resolve('./src/page'));
  },
  // eslint在保存时候检查
  lintOnSave: false,
};
