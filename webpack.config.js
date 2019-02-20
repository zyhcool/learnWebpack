const webpack = require("webpack");

module.exports = {
  mode: "development",
  // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry: ["./app/entry1.js","./app/entry2.js"],
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
  },
  devtool: "eval-source-map",
  // 服务器，默认端口 8080；浏览器监听编辑器，实时编译修改后文件；
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true,
    inline: true, // 实时刷新
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