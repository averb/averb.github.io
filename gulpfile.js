const { src, dest, watch, series, parallel } = require('gulp')
const gcmq = require('gulp-group-css-media-queries')
const csso = require('gulp-csso')
const connect = require('gulp-connect')
const htmlImport = require('gulp-html-import')
const concat = require('gulp-concat')

const optimizeCss = () => {
  return src('./css/main.css').pipe(csso()).pipe(dest('./css'))
}

const importComponents = () => {
  return src('./src/*.html')
    .pipe(htmlImport('./src/components/'))
    .pipe(dest('./'))
}

const groupQueries = () => {
  return src('./css/main.css').pipe(gcmq()).pipe(dest('./css'))
}

const runServer = () => {
  connect.server({
    root: './',
    port: '1993',
    livereload: true
  })
}

const concatCss = () => {
  return src([
    './src/css/config/reset.css',
    './src/css/config/variables.css',
    './src/css/config/default.css',
    './src/css/config/global.css',
    './src/css/components/**/*.css'
  ])
    .pipe(concat('main.css'))
    .pipe(dest('./css'))
}

const watchFiles = () => {
  watch('./src/css/**/*.css', concatCss)
  watch('./src/components/*.html', importComponents)
}

exports.default = parallel(runServer, watchFiles)
exports.build = series(concatCss, groupQueries, optimizeCss)
