var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('pngquant');
var htmlmin = require('gulp-htmlmin');
var cache = require('gulp-cache');
var rigger = require('gulp-rigger');


gulp.task('sass', function(){
    return gulp.src(['app/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('cms-sass', function(){
    return gulp.src(['app/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('assets/avtograf/css'))
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|svg)')
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      // imagemin.jpegtran({progressive: true}),
      // imageminJpegRecompress({
      //   loops: 5,
      //   min: 65,
      //   max: 70,
      //   quality:'high'
      // }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '65-70', speed: 5})
    ],{
      verbose: true
    })))
    .pipe(gulp.dest('dist/images'))
});


gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('cms-fonts', function(){
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('assets/avtograf/fonts'))
});

gulp.task('css', function(){
    return gulp.src('node_modules/izimodal/css/iziModal.min.css')
    .pipe(gulp.dest('dist/css'))
});

gulp.task('cms-css', function(){
    return gulp.src('node_modules/izimodal/css/iziModal.min.css')
    .pipe(gulp.dest('assets/avtograf/css'))
});

gulp.task('common', function(){
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/izimodal/js/iziModal.min.js',
            'node_modules/slick-carousel/slick/slick.min.js'
        ])
    .pipe(concat('common.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('cms-common', function(){
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/izimodal/js/iziModal.min.js',
            'node_modules/slick-carousel/slick/slick.min.js'
        ])
    .pipe(concat('common.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/avtograf/js'))
});

gulp.task('js', function(){
    return gulp.src([
            'app/js/app.js'
        ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('cms-js', function(){
    return gulp.src([
            'app/js/app.js'
        ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/avtograf/js'))
});

gulp.task('html', function() {
  return gulp.src(['app/*.html', 'app/_blocks/*.html'])
    .pipe(rigger())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: 'dist'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass', 'images', 'fonts', 'js', 'html', 'common', 'css'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/*.js', ['js']);
    gulp.watch(['app/*.html', 'app/_blocks/**/*.html'], ['html']);
    gulp.watch('app/images/', ['images']);
});

gulp.task('cms', ['cms-sass', 'cms-fonts', 'cms-common', 'cms-js', 'cms-css'], function(){
    gulp.watch('app/scss/**/*.scss', ['cms-sass']);
    gulp.watch('app/js/*.js', ['cms-js']);
})

gulp.task('run', ['sass', 'images', 'fonts', 'js', 'html', 'common'])