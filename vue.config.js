const path = require("path");
const { config } = require("process");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/dailylife/" : "/",
  publicPath: "/",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@a", resolve("src/assets"))
      .set("@c", resolve("src/components"))
      .set("@v", resolve("src/views"))
      .set("@u", resolve("src/utils")),
      config.entry("main").add("babel-polyfill"); // main是入口js文件
  },
  // outputDir: 'dailylife',
  outputDir: path.resolve(__dirname, "dist"),
  lintOnSave: false, //关闭eslint
};
