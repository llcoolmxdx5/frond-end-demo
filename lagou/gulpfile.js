const { watch, series, parallel, src, dest } = require('gulp');
const gulpServer = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const path = require('path');
const proxy = require('http-proxy-middleware');

function copyHtml() {
  return src('./src/views/*.html')
    .pipe(dest('./dev/'))
}

function copyImages() {
  return src('./src/images/*.*')
    .pipe(dest('./dev/images/'))
}

function compileCss() {
  return src('./src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(dest('./dev/style/'))
}

function compileJs() {
  return src('./src/js/index.js')
    .pipe(webpack({
      mode: 'development',
      devtool: 'inline-source-map',
      entry: './src/js/index.js',
      output: {
        path: path.resolve(__dirname, './dev/js/'),
        filename: 'all.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(dest('./dev/js/'))
}

function copyLibs() {
  return src('./src/libs/*')
    .pipe(dest('./dev/libs/'))
}

function startServer() {
  return src('./dev/')
    .pipe(gulpServer({
      //是否支持热更新
      livereload: true,
      port: 10086,
      host: '0.0.0.0',
      //是否展示文件夹列表
      //directoryListing: true,
      //打开浏览器
      open: true,
      middleware: [
        proxy('/fetch', {
          // target: 'http://localhost:9099/',
          target: 'https://m.lagou.com/',
          changeOrigin: true, // 是否支持跨域
          pathRewrite: { // 路径重写
            '^/fetch': ''
          }
        })]
    }))
}

function watchFile() {
  watch('./src/**/*.js', cb => {
    compileJs()
    cb()
  })
  watch('./src/style/*.scss', cb => {
    compileCss()
    cb()
  })
  watch('./src/views/**/*.html', cb => {
    copyHtml()
    compileJs()
    cb()
  })
  watch('./src/libs/*.*', cb => {
    copyLibs()
    cb()
  })
}

exports.default = series(
  parallel(copyHtml, copyImages, compileCss, compileJs, copyLibs),
  startServer,
  watchFile)