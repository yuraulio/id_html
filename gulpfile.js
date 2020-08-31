'use strict';

const {
  src,
  dest,
  watch,
  series,
  parallel
  } = require('gulp');

// Підключаємо потрібні для роботи модулі gulp
var scss = require('gulp-sass'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    del = require('del'),
    browserSync = require('browser-sync').create();


    scss.compiler = require('node-sass');

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
        title  : "SCSS compile Error!"
      })))
    .pipe(prefix())
    .pipe(rename('style.css'))
    .pipe(dest(path.dist.style));
}

function js() {
  return src(path.app.js)
        .pipe(rigger())
        .pipe(dest(path.dist.js))
        .pipe(src('node_modules/jquery/dist/jquery.js'))
        .pipe(dest(path.dist.js))
        .pipe(src('node_modules/bootstrap/dist/js/bootstrap.bundle.js'))
        .pipe(dest(path.dist.js))
        .pipe(src('node_modules/bootstrap/dist/js/bootstrap.bundle.js.map'))
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
exports.default = series(exports.build, function() {
  browserSyncInit();
  watch(path.app.html).on('all', html);
  watch('app/scss/**/*.scss').on('all', css);
  watch(path.app.js).on('all', js);
  watch(path.app.img).on('all', img);
  watch(path.app.fonts).on('all', fonts);
});
