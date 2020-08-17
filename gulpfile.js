const {src, dest, watch} = require('gulp');
var gulp_scss = require('gulp-scss');
var notify = require('gulp-notify');
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
  return src('app/**/*')
    .pipe(dest('dist'));
}

exports.scss = scss;
exports.build = build;
exports.default = function() {
  syncInit();
  watch('app/scss/*.scss', scss);
  watch(['app/*.html', 'app/js/*.js']).on('change', browserSync.reload);

}
