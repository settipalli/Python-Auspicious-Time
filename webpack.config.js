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
      },
      {
        test: /\.css$/,
        exclude: [__dirname + '/node_modules/', __dirname + '/static/css/prod'],
        loader:'style-loader!css-loader'
      }
    ],
  },
  
  entry: {
    bundle: [__dirname + '/static/js/src/material.js', __dirname + '/static/js/src/main.js']
  },
  output: {
    path: __dirname + '/static/js/prod',
    filename: '[name].js'
  },
  watch: true
}