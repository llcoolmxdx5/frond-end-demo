const { watch, series, parallel, src, dest } = require('gulp');
const gulpServer = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const path = require('path');
const del = require('del');
const rev = require('gulp-rev');
const revCol = require('gulp-rev-collector');

function copyHtml() {
  return src('./src/views/*.html')
    .pipe(dest('./dist/'))
}

function copyImages() {
  return src('./src/images/*.*')
    .pipe(dest('./dist/images/'))
}

//编译css
function compileCSS() {
  return src(['./src/style/*.scss', '!./src/style/detail.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(rev())
    .pipe(dest('./dist/style/'))
    .pipe(rev.manifest('css-index-manifest.json'))
    .pipe(dest('./rev/'))
}

function detailCompileCss() {
  return src(['./src/style/detail.scss', './src/style/reset.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('detail.css'))
    .pipe(rev())
    .pipe(dest('./dist/style/'))
    .pipe(rev.manifest('css-detail-manifest.json'))
    .pipe(dest('./rev/'))
}

function compileJs() {
  return src('./src/js/index.js')
    .pipe(webpack({
      mode: 'production',
      devtool: 'inline-source-map',
      entry: {
        index: './src/js/index.js',
        detail: './src/js/detail.js'
      },
      output: {
        path: path.resolve(__dirname, './dist/js/'),
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
    .pipe(rev())
    .pipe(dest('./dist/js/'))
    .pipe(rev.manifest('js-rev-manifest.json'))
    .pipe(dest('./rev/'))
}

function copyLibs() {
  return src('./src/libs/*')
    .pipe(dest('./dist/libs/'))
}

function remove() {
  return del(['./dist/'])
}

function removeRev() {
  return del(['./rev/'])
}

function revCollector() {
  return src(['./rev/*.json', './dist/*.html'])
    .pipe(revCol())
    .pipe(dest('./dist/'))
}

exports.default = series(remove,
  parallel(copyHtml, copyImages, compileCSS, detailCompileCss, compileJs, copyLibs), revCollector, removeRev)