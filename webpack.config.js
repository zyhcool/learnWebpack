module.exports = {
    // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    entry:  __dirname + "/app/main.js",// 唯一入口文件
    output: {
      path: __dirname + "/public", // 输出路径
      filename: "bundle.js" // 输出文件的文件名
    }
  }