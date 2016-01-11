// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var debug = require('gulp-debug');
var gulpif = require('gulp-if');
var flatten = require('gulp-flatten');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-regex-replace');

var dateFormat = require('dateformat');
var now = new Date(); 
var version = dateFormat(now, "yyyymmdd'T'hhmmss");


gulp.task('clean', function(){
	  return gulp.src(['dist/*'], {read:false})
	  .pipe(clean());
});

gulp.task('copyHtml', ['clean'], function () {
	return gulp.src("webapp/index.html")
		.pipe(rename("index.html"))
		.pipe(gulp.dest("dist")); 
});

gulp.task('copyHtmlDev', ['copyHtml'], function () {
	return gulp.src("dist/index.html")
		.pipe(rename("indexDev.html"))
		.pipe(gulp.dest("dist")); 
});

gulp.task('copyTemplate', ['clean'], function () {
	return gulp.src("webapp/asset/pages/**/*.html")
		.pipe(debug())
		.pipe(flatten())
		.pipe(gulp.dest("./dist/asset" + version + "/combined")); 
});

gulp.task('copyAsset', ['clean'], function () {
	return gulp.src("webapp/asset/**/*.*")
		.pipe(gulp.dest("./dist/asset"+ version));
});

gulp.task('copyVendor', ['clean'], function () {
	return gulp.src("webapp/vendor/**/*.*")
		.pipe(gulp.dest("./dist/vendor/")); 
});


gulp.task('appendVersion', ['copyHtml'], function () {
	return gulp.src('dist/index.html')
		.pipe(replace({regex:'asset/', replace:'asset'+version+"/"}))
		.pipe(gulp.dest("dist")); ;
});

gulp.task('appendVersionDev', ['copyHtmlDev'], function () {
	return gulp.src('dist/indexDev.html')
		.pipe(replace({regex:'asset/', replace:'asset'+version+"/"}))
		.pipe(gulp.dest("dist")); ;
});

gulp.task('useref', ['appendVersion', 'appendVersionDev', 'copyVendor', 'copyAsset'], function () {
    return gulp.src('dist/index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Default Task
//gulp.task('default', ['clean', 'copyAsset', 'copyVendor', 'copyHtmlDev', 'useref']);
//gulp.task('default', ['copyAsset', 'copyVendor', 'copyHtmlDev', 'appendVersionDev', 'useref']);
gulp.task('default', ['useref', 'copyTemplate']);
