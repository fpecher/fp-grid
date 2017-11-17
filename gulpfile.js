var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload')

gulp.task('styles', function() {
  return gulp.src('scss/grid.scss')
      	.pipe(sass({ style: 'expanded' }))
      	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      	.pipe(gulp.dest('css/'))
        .pipe(livereload());
});


//Watch task
gulp.task('watch', function() {

  livereload.listen();

  // Watch .scss files
  gulp.watch('scss/**/*.scss', ['styles']);

});

gulp.task('default', ['styles', 'watch']);
