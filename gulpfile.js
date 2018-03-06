var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');

gulp.task ('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});


// gulp.task ('sass_shell', shell.task([
//     'echo',
//     'echo Building the sass styles ./css ...',
//     'echo',
//     'npm run compile:sass',
//     'echo'
// ]));

gulp.task('default', ['sass']);