module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'fonts/**/*.{woff,woff2}',
      'images/freesloveniav/**',
      '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};