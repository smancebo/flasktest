
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');



var vendorsSass = ['app/bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss'];
var appUrl = 'public/assets/js';
var htmlTemplates = 'source/app/**/*.html';

var vendorJs =
[
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
];

var appJs =
[
  'source/app/app.js',
  'source/app/**/*.service.js',
  'source/app/**/*.controller.js',
  'source/app/**/*.directive.js'
];

gulp.task('default',['build-sass','build-vendors','build-app','cache-template'
                   ,'watch:html', 'watch:sass','lint:js'], function(){
  console.log('gulp is running');
});

gulp.task('cache-template', function(){
  gulp.src(htmlTemplates)
  .pipe(templateCache('templates.js', {standalone: true}))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('build-sass', function(){
  gulp.src('source/assets/scss/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('public/assets/css'))
});

gulp.task('build-vendors', function(){
  gulp.src(vendorJs)
  .pipe(concat('vendors.js'))
  .pipe(gulp.dest(appUrl))
});

gulp.task('lint', function(){
  return gulp.src('source/app/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('build-app', function(){
  gulp.src(appJs)
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(appUrl))
});




gulp.task('watch:sass', function(){
  gulp.watch('source/assets/scss/**/*.scss', ['build-sass'])
});

gulp.task('watch:app', function(){
  gulp.watch(appJs, ['build-app']);
});

gulp.task('watch:html', function(){
  gulp.watch(htmlTemplates, ['cache-template'])
})

gulp.task('lint:js', function(){
  gulp.watch(appJs, ['lint', 'build-app']);
})
