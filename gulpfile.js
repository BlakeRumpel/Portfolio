const gulp = require('gulp');
const clean = require('gulp-clean-css');

gulp.task('default', () => {
    gulp.watch('css/**/*.css', ['styles']);
});

gulp.task('styles', () => {
    gulp.src('css/*.css')
          .pipe(clean())
          .pipe(gulp.dest('css/min'));
});