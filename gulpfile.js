// Include the required packages
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq = require('gulp-group-css-media-queries'),
	csso = require('gulp-csso'),
	connect = require('gulp-connect'),
	htmlImport = require('gulp-html-import'),
	minify = require('gulp-minify');

// CSS Optimizer
gulp.task('csso', function () {
	return gulp.src('css/main.css')
		.pipe(csso())
		.pipe(gulp.dest('css'));
});

// html import
gulp.task('import', function () {
	return gulp.src('./build/*.html')
		.pipe(htmlImport('./build/import/'))
		.pipe(gulp.dest('./'));
})

// Group css media queries
gulp.task('gcmq', function () {
	return gulp.src('css/main.css')
		.pipe(gcmq())
		.pipe(gulp.dest('css'));
});

// Localhost
gulp.task('server', function () {
	connect.server({
		root: './',
		port: '7777',
		livereload: true
	});
});

// sass
gulp.task('sass', function () {
	return gulp.src('build/sass/main.sass')
		.pipe(sassGlob())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
	gulp.watch('build/sass/**/*.sass', ['sass']);
	gulp.watch('css/main.css', ['gcmq']);
	gulp.watch('build/**/*.html', ['import']);
});

// Default gulp task to run
gulp.task('default', ['server', 'watch']);
