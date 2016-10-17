var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src(__dirname+'/css/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(__dirname+'/css'));
});
gulp.task('default',['sass'])
