// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// Images
var imagemin = require('gulp-imagemin');

// JS
var uglify = require('gulp-uglify');

// HTML
var htmlmin = require('gulp-htmlmin');

// compile all your css
gulp.task('css', function (){
  gulp.src(['src/*.css'])
    .pipe(prefix(
      "last 1 version", "> 1%"
      ))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'));
});


// Images
gulp.task('imagemin', function () {
  gulp.src('src/img/**/*')
  .pipe(imagemin({progressive: true, verbose: true}))
  .pipe(gulp.dest('dist/img'));
});

// HTML

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// HTML

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'imagemin', 'html', 'js'], function(){

});
