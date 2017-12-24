const gulp = require('gulp')
const browserSync = require('browser-sync')
const harp = require('harp')

const stylesheetFiles = [
  './src/public/styles/*.css',
  './src/public/styles/*.sass',
  './src/public/styles/*.scss',
  './src/public/styles/*.less'
]

const documentFiles = [
  './src/public/*.html',
  './src/public/*.ejs',
  './src/public/*.jade',
  './src/public/*.js',
  './src/public/*.json',
  './src/public/*.md'
]

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', () => {
  harp.server('./src', {
    port: 9000
  }, () => {
    browserSync({
      proxy: 'localhost:9000',
      open: true,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    })
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch(stylesheetFiles, () => {
      browserSync.reload('main.css', {stream: true})
    })
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(documentFiles, () => {
      browserSync.reload()
    })
  })
})

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve'])
