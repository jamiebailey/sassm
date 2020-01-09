const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: 'electron-renderer',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: './',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /.json?/
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }, {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'build/fonts',
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};