const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [__dirname + '/node_modules', __dirname + '/sass'],
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
