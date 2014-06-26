var browserify = require('browserify'),
    watchify = require('watchify'),
    gulp     = require('gulp'),
    source   = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourceFile = './js/main.js',
    destFolder = './js/',
    destFile  =  'bundled.js';


gulp.task('browserify', function() {
  return browserify(sourceFile)
    .bundle({debug: true})
    .pipe(source(destFile))
    .pipe(gulp.dest(destFolder));
});

gulp.task('uglify', function(){
  gulp.src('./js/bundled.js')
  .pipe(uglify())
  .pipe(concat('bundled.min.js'))
  .pipe(gulp.dest('./js/'));
});


gulp.task('watch', function(){

  var bundler = watchify(sourceFile);
      bundler.on('update', rebundle);

      function rebundle() {
        console.log('rebundling');
        //This is doing the same thing as the browserify task
        //Pull this logic out at some point    
        bundler.bundle({debug: true})          
          .pipe(source(destFile))        
          .pipe(gulp.dest(destFolder));     
      }

    return rebundle();
});

gulp.task('tests', function() {
  //Add tests
});

gulp.task('default', ['browserify', 'uglify', 'watch']);