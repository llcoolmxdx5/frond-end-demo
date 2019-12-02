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
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", path.resolve(__dirname, "./src/assets/"))
      .set("style", path.resolve(__dirname, "./src/assets/style/"))
      .set("public", path.resolve(__dirname, "./public/"));
  }
};
