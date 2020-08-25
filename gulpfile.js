const {src, dest, watch, series} = require('gulp');
var gulp_scss = require('gulp-scss');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

function syncInit() {
  browserSync.init({
        server: {
            baseDir: "app"
        }
    });
}

function scss() {
  return src('app/scss/style.scss')
    .pipe(gulp_scss().on('error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "SCSS cimpile Error!"
      })))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function  build() {
  return src('app/js/src/*.js')
    .pipe(concat('scripts.js'))
    .pipe(dest('app/js/'));
}

exports.scss = scss;
exports.build = build;
exports.default = function() {
  syncInit();
  watch('app/*.html').on('change', browserSync.reload);
  watch('app/scss/*.scss').on('change', scss);
  watch('app/js/src/*.js').on('change',
  series(build, browserSync.reload));

}
