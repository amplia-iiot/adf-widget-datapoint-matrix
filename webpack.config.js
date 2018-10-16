var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    app: [
      './src/datapointMatrix.js'
    ],
    vendor: ['angular-matrix']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.css$|\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: 'angular-templatecache-loader?module=adf.widget.datapointMatrix'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
};

module.exports = config;
