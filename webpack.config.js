const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  // 服务器，默认端口 8080；浏览器监听编辑器，实时编译修改后文件；
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true,
    inline: true, // 实时刷
    port: 4000,
    host: process.env.HOST,
    open: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
  ]
}