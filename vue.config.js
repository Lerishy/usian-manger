const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包之后白屏问题
  publicPath : "./",
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 启动项目时是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy:{
      //dev-api 代理名称
      "/dev-api":{
        //跨域的地址
        target:"http://localhost:3000/",
        changeOrigin:true,
        //路径重写
        
      }
    }
  },
  // 关闭eslint
  lintOnSave : false
});
