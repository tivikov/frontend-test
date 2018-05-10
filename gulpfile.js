var gulp         = require('gulp'),
    utill        = require('gulp-util'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    cleancss     = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require("gulp-notify"),
    rsync        = require('gulp-rsync');

gulp.task('browser-sync', function () {  
  browserSync({
    server: {
      baseDir: 'app'
    },
    open: false
  })
})

gulp.task('sass', function () {  
  return gulp.src('app/sass/**/*.sass')
  .pipe(sass({ outputStyle: 'expand' }).on('error',notify.onError()))
  .pipe(rename({ suffix: '.min', prefix: '' }))
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream())
})

gulp.task('js', function () {
  return gulp.src('app/js/main.js').pipe(concat('main.min.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', ['sass', 'js', 'browser-sync'], function () {  
  gulp.watch('app/sass/**/*.sass',['sass']);
  gulp.watch('app/js/main.js',['js']);
  gulp.watch('app/*.html', browserSync.reload);
})

gulp.task('default', ['watch']);