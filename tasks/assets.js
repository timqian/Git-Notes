var gulp = require('gulp');

gulp.task("assets", function() {
  return gulp.src(['./src/index.html', './src/assets/**/*'])
    .pipe(gulp.dest('dist'));
});