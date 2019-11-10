const { watch, series, parallel, src, dest } = require('gulp');
const gulpServer = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const path = require('path');
const proxy = require('http-proxy-middleware');
const del = require('del');

function copyHtml() {
  return src('./src/views/*.html')
    .pipe(dest('./dev/'))
}

function copyImages() {
  return src('./src/images/*.*')
    .pipe(dest('./dev/images/'))
}

//编译css
function compileCSS() {
  return src(['./src/style/*.scss', '!./src/style/detail.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(dest('./dev/style/'))
}

function detailCompileCss() {
  return src(['./src/style/detail.scss', './src/style/reset.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('detail.css'))
    .pipe(dest('./dev/style/'))
}

function compileJs() {
  return src('./src/js/index.js')
    .pipe(webpack({
      mode: 'development',
      devtool: 'inline-source-map',
      entry: {
        index: './src/js/index.js',
        detail: './src/js/detail.js'
      },
      output: {
        path: path.resolve(__dirname, './dev/js/'),
        filename: '[name].js'
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

function remove() {
  return del(['./dev/'])
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
    // compileCss()
    detailCompileCss()
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

exports.default = series(remove,
  parallel(copyHtml, copyImages, compileCSS, detailCompileCss, compileJs, copyLibs),
  startServer,
  watchFile)