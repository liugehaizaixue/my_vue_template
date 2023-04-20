module.exports = {
  assetsDir:'static',
  publicPath: './',
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  }
}