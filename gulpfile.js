
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var fs = require('fs');
var _ = require('lodash');
var marked = require('marked');
var markedExample = require('marked-example');
var markedToc = require('marked-toc');

gulp.task('md', function() {

  var renderer = new marked.Renderer();
  renderer.code = markedExample({
    classes: {
      container: 'bg-darken-1 rounded',
      rendered: 'p2',
      code: 'p2 bg-darken-1'
    }
  });
  var md = fs.readFileSync('./README.md', 'utf8');
  var content = marked(md, { renderer: renderer });

  var tocmd = markedToc(md);
  var toc = marked(tocmd);

  var tpl = fs.readFileSync('./src/templates/index.html', 'utf8');
  var rendered = _.template(tpl, { body: content, toc: toc });
  fs.writeFileSync('./index.html', rendered);

});

gulp.task('css', function() {
  gulp.src('./src/css/*.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('core-styles', function() {
  function render(id) {
    var src = fs.readFileSync('./src/templates/template.html', 'utf8');
    var css = fs.readFileSync('./css/' + id + '.css', 'utf8');
    var rendered = _.template(src, { css: css, id: 'basscss-' + id });
    fs.writeFileSync('./components/basscss-' + id + '.html', rendered);
  }
  render('base');
  render('utility');
  render('grid');
  render('table-object');
  render('color');
});

gulp.task('js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  gulp.src('./src/js/app.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});


gulp.task('default', ['md', 'css', 'core-styles', 'js', 'serve'], function() {
  gulp.watch(['./src/**/*', './README.md'], ['md', 'css', 'core-styles', 'js']);
});

