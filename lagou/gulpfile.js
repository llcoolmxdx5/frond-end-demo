const { watch, series, parallel, src, dest } = require('gulp');
const gulpServer = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const path = require('path');

function copyHtml() {
  return src('./src/views/*.html')
    .pipe(dest('./dev/'))
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
    module:{
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
        }
      ]
    }
  }))
  .pipe(dest('./dev/js/'))
}

function startServer() {
  return src('./dev/')
    .pipe(gulpServer({
      //是否支持热更新
      livereload: true,
      port: 10086,
      host: '127.0.0.1',
      //是否展示文件夹列表
      //directoryListing: true,
      //打开浏览器
      open: true
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
  watch('./src/views/*.html', cb => {
    copyHtml()
    cb()
  })
}

exports.default = series(parallel(copyHtml, compileCss, compileJs), startServer, watchFile)