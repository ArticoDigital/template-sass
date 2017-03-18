/*
 * Dependencias
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
        uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify');

;
gulp.task('sass', function () {
    return gulp.src('./assets/sass/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('main.css'))
        .pipe(rename({
            basename: 'main',
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
});


gulp.task('artico', function () {
    return gulp.src('./assets/sass/lib/**/*.sass')

        .pipe(concat('artico.sass'))
        .pipe(gulp.dest('./assets/sass/'));
});
