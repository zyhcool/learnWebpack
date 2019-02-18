const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry: __dirname + "/app/main.js", // 唯一入口文件
  output: {
    path: __dirname + "/build", // 输出路径
    filename: "bundle.js", // 输出文件的文件名
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
      }, {
        test: /\.css$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader", // style-loader在前， css-loader在后
        }],
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new htmlWebpackPlugin({
      template: __dirname + "/app/index.template.html",
    }),
    new ExtractTextPlugin("style.css")
  ]
}