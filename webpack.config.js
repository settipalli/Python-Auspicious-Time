module.exports = {
  entry: {
    bundle: [__dirname + '/static/js/material.js', __dirname + '/static/js/main.js']
  },
  output: {
    path: __dirname + '/static/prod/js',
    filename: '[name].js'
  },
  watch: true
}