const path = require("path");

module.exports = {
  devServer: {
    port: 9090,
    open: true,
    proxy: {
      "/api": {
        target: "http://m.maoyan.com/",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 375, // 设计图的宽度
            unitPrecision: 3, // 精度
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "猫眼电影",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    detail: {
      // page 的入口
      entry: "src/detail.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "detail.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "详情",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "detail"]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", path.resolve(__dirname, "./src/assets/"))
      .set("style", path.resolve(__dirname, "./src/assets/style/"))
      .set("public", path.resolve(__dirname, "./public/"));
  }
};
