var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var concat = require('gulp-concat');

function compileScss() {
    return (
        gulp
            .src("scss/main.scss")
            .pipe(sass())
            .pipe(cssnano())
            .on("error", sass.logError)
            .pipe(gulp.dest("dist/css"))
    );
}

function compileJs() {
    return (
        gulp
            .src([
                "node_modules/jquery/dist/jquery.min.js", 
                "node_modules/bootstrap/dist/js/bootstrap.min.js",
                "node_modules/jquery-ui-dist/jquery-ui.min.js",
                "node_modules/scrollreveal/dist/scrollreveal.min.js",
                "js/script.js"
            ])
            .pipe(concat('final.js'))
            .pipe(gulp.dest('dist/js'))
    );
}

function watch() {
    compileScss();
    compileJs();
    gulp.watch('scss/*.scss', compileScss)
    gulp.watch('js/*.js', compileJs)
}

exports.watch = watch;