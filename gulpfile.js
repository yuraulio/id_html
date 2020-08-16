const {src, dest, watch} = require('gulp');
var gulp_scss = require('gulp-scss');
var notify = require('gulp-notify');

function scss() {
  return src('app/scss/style.scss')
    .pipe(gulp_scss().on('error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "SCSS cimpile Error!"
      })))
    .pipe(dest('app/css'));
}

function  build() {
  return src('app/**/*')
    .pipe(dest('dist'));
}

exports.scss = scss;
exports.build = build;
exports.default = function() {
  watch('app/scss/*.scss', scss);
}
