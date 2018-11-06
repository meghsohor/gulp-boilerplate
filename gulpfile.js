var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var prefixerOptions = {
  browsers: ['last 2 versions']
};


gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .pipe(prefix(prefixerOptions))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);