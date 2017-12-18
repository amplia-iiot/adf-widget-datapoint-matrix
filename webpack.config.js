var webpack = require('webpack');
var path = require("path");

var config = {
    entry: {
        app: [
            './src/datapointMatrix.js'
        ],
        vendor: ['angular-matrix']
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "angular-templatecache-loader?module=adf.widget.datapointMatrix"
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