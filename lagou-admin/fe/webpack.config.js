const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, './dev')
  },
  devServer: {
    open: true,
    port: 7099,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          // "^/api": ""
        }
      }
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new copyPlugin([{
      from: './src/static/',
      to: './static/'
    }])
  ],
  module: {
    rules: [
      { test: /\.html$/, loader: "string-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // 注入到页面中
        //   MiniCssExtractPlugin.loader, // 提取为css文件
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}