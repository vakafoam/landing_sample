var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var SOURCEPATHS = {
    sassSource: 'sass/main.scss'
}

var APPPATH = {
    root: './',
    css: 'css',
    js: './js'
}

gulp.task ('sass', function() {
    return gulp.src(SOURCEPATHS.sassSource)
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest(APPPATH.css));
});

// gulp.task ('sass_shell', shell.task([
//     'echo',
//     'echo Building the sass styles ./css ...',
//     'echo',
//     'npm run compile:sass',
//     'echo'
// ]));

gulp.task('serve', ['sass'], function() {
    browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '*.html',
        APPPATH.js + '/*.js'], {
            server: {
                baseDir: APPPATH.root
            }
        })
});

gulp.task('default', ['serve']);