module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [__dirname + '/node_modules/', __dirname + '/static/js/prod'],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  
  entry: {
    bundle: [__dirname + '/static/js/material.js', __dirname + '/static/js/main.js']
  },
  output: {
    path: __dirname + '/static/js/prod',
    filename: '[name].js'
  },
  watch: true
}