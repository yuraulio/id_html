const {src, dest, watch} = require('gulp');
var gulp_scss = require('gulp-scss');

function scss() {
  return src('app/scss/style.scss')
    .pipe(gulp_scss().on('error', function(error)
      {
        console.log( error );
      } ))
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
