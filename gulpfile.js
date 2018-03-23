'use strict';

const gulp = require('gulp');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack-stream');
const clone = require('clone');
const del = require('del');
const less = require('gulp-less');
const uglifyCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');
const concat = require('gulp-concat')

gulp.task('js', function() {
	const config = clone(webpackConfig);
	return gulp.src('./front/*.jsx')
			.pipe(webpack(config))
			.pipe(gulp.dest('./public'));
});

gulp.task('css', function() {
	return gulp.src('./front/**/*.{less,css}')
			.pipe(less())
			.pipe(autoprefixer())
			.pipe(concat('bundle.css'))
			.pipe(uglifyCSS())
			.pipe(gulp.dest('./public'));
});

gulp.task('html', function() {
	return gulp.src('./front/index.html')
			.pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
	return del('./public/**.*');
});

gulp.task('build', ['clean', 'js', 'html', 'css']);

gulp.task('default', function() {

});