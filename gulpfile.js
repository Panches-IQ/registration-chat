'use strict';

const gulp = require('gulp');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack-stream');
const clone = require('clone');
const del = require('del');

gulp.task('js', function() {
	const config = clone(webpackConfig);
	return gulp.src('./front/*.jsx')
			.pipe(webpack(config))
			.pipe(gulp.dest('./public'));
});

gulp.task('html', function() {
	return gulp.src('./front/index.html')
			.pipe(gulp.dest('./public'));
});

gulp.task('clean', function() {
	return del('./public/**.*');
});

gulp.task('build', ['clean', 'js', 'html']);

gulp.task('default', function() {

});