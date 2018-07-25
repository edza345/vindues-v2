var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('sass', function() {
   return gulp.src('sass/calculator.scss')
       .pipe(sass())
       .pipe(concat('calculator.css'))
       .pipe(gulp.dest('css/'))
});

gulp.task('local-sass', function() {
    return gulp.src('sass/local.scss')
        .pipe(sass())
        .pipe(concat('local.css'))
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
   gulp.watch('sass/calculator.scss',['sass']);
   gulp.watch('sass/local.scss',['local-sass']);
});