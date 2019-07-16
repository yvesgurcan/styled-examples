const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const { publicPath = '/' } = env;

    return {
        output: {
            chunkFilename: '[id].[name].[chunkhash].chunk.js',
            filename: './dist/[id].[name].[chunkhash].js',
            publicPath
        },

        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'all'
            },
            usedExports: true
        },

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[id].[name].[chunkhash].css',
                chunkFilename: '[id].[name].[chunkhash].chunk.css'
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: '../index.html'
            })
        ]
    };
};
