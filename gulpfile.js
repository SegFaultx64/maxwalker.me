// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-clean-css');

// Images
var imagemin = require('gulp-imagemin');

// JS
var uglify = require('gulp-uglify');

// HTML
var htmlmin = require('gulp-htmlmin');
var cachebust = require('gulp-cache-bust');

// compile all your css
gulp.task('css', function (){
  return gulp.src(['src/*.css'])
    .pipe(prefix())
    .pipe(minifycss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/'));
});


// Images
gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*')
  .pipe(imagemin({progressive: true, verbose: true}))
  .pipe(gulp.dest('dist/img'));
});

// HTML

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(cachebust({}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// HTML

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('css', 'imagemin', 'html', 'js'));
