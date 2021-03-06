const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-bundle-[hash].js",
    chunkFilename: "[name]-[chunkHash:5].js",
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
    new CleanWebpackPlugin(["build/*.*"],{dry: false}),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "_index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name]-[contenthash:12].css",
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
      new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
    ],
  }
}