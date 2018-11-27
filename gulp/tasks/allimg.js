module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/freesloveniav/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/freesloveniav'));
  });
};