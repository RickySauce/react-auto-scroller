var webpack = require('webpack');


var config = {
  entry: __dirname + '/src/main/AutoScroller.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
     libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
};

module.exports = config;
