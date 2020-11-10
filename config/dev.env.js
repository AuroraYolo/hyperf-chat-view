'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//注：开发环境修改变量后重启服务才会生效
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://127.0.0.1:9500"',
  WEB_SOCKET_URL: '"http://127.0.0.1:9502"',
});
