var browserify = require('browserify'),
    watchify = require('watchify'),
    gulp     = require('gulp'),
    source   = require('vinyl-source-stream'),
    sourceFile = './js/main.js',
    destFolder = './js/',
    destFile  =  'bundled.js';


gulp.task('browserify', function() {
  return browserify(sourceFile)
    .bundle({debug: true})
    .pipe(source(destFile))
    .pipe(gulp.dest(destFolder));
});

gulp.task('watch', function(){
  var bundler = watchify(sourceFile);
      bundler.on('update', rebundle);

      function rebundle() {
        //This is doing the same thing as the browserify task
        //Pull this logic out at some point
        return bundler.bundle({debug: true})
          .pipe(source(destFile))
          .pipe(gulp.dest(destFolder));
      }

  return rebundle();
});

gulp.task('tests', function() {
  //Add tests
});

gulp.task('default', ['browserify', 'watch']);