const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define a SCSS compilation task
gulp.task('sass', function () {
  return gulp.src('Root/*.scss') // Update the source SCSS file path
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(gulp.dest('Root/')); // Update the destination folder to save compiled CSS
});

// Define a watch task to monitor SCSS file changes
gulp.task('watch', function () {
  gulp.watch('Root/*.scss', gulp.series('sass')); // Update the SCSS file path to watch for changes
});

// Define a default task that runs 'sass' and 'watch' tasks
gulp.task('default', gulp.parallel('sass', 'watch'));
