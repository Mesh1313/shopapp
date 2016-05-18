'use strict';
require('babel-register');
require('babel-polyfill');


const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    cssnano = require('cssnano');

let config = {
    bower: './client/app/bower_components',
    source: './client/app',
    dist: './client/dist'
};

gulp.task('build-css', () => {
    return gulp.src(assetsDev + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});