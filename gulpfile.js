'use strict';

const {
  src,
  dest,
  watch,
  series,
  parallel
  } = require('gulp');

// Підключаємо потрібні для роботи модулі gulp
var scss = require('gulp-scss'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    del = require('del'),
    browserSync = require('browser-sync').create();

//  Шляхи до робочих директорій
var path = {
    dist: { // Папка з готовим до роботи проектом
        html: 'dist/',
        js: 'dist/js/',
        style: 'dist/css/',
        img: 'dist/images/',
        fonts: 'dist/fonts/'
    },
    app: { //  Папка, у якій ведеться розробка
        html: 'app/*.html',
        js: 'app/js/main.js',
        style: 'app/scss/master.scss',
        img: 'app/images/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist'
};

function browserSyncInit() {
  browserSync.init({
    watch: true,
    server: path.dist.html
  });
}

function html() {
  return src(path.app.html)
        .pipe(rigger())
        .pipe(dest(path.dist.html));
}

function css() {
  return src(path.app.style)
    .pipe(scss().on('error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "SCSS cimpile Error!"
      })))
    .pipe(prefix())
    .pipe(rename('style.css'))
    .pipe(dest(path.dist.style))
    .pipe(src("node_modules/bootstrap/dist/css/bootstrap.css"))
    .pipe(dest(path.dist.style));
}

function js() {
  return src(path.app.js)
        .pipe(rigger())
        .pipe(dest(path.dist.js));
}

function img() {
  return src(path.app.img)
        .pipe(dest(path.dist.img));
}

function fonts() {
  return src(path.app.fonts)
        .pipe(dest(path.dist.fonts));
}
function clean() {
  return del(path.clean);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.build = series(clean, parallel(html, css, js, img, fonts));
exports.clean = clean;
exports.bs = browserSyncInit;
exports.default = function() {
  series(exports.build); // Збираємо проект (запхано у series, щоб наступна команда виконувалась точно після завершення цієї)
  browserSyncInit();
  watch(path.app.html).on('change', html);
  watch(path.app.style).on('change', css);
  watch(path.app.js).on('change', js);
  watch(path.app.img).on('change', img);
  watch(path.app.fonts).on('change', fonts);
}
