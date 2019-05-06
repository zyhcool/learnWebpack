const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-bundle-[hash].js",
  },
  devtool: "eval-source-map",
  // 服务器，默认端口 8080；浏览器监听编辑器，实时编译修改后文件；
  devServer: {
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true,
    inline: true, // 实时刷
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "_index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id]-[hash].css",
    })
  ]
}