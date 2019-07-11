const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const configLoader = require('../config/configLoader');

const configuration = configLoader.getConfig();
const prodConfigToUse = _.get(configuration, 'prod', {});
const stageConfigToUse = _.get(configuration, 'stage', {});
const qaConfigToUse = _.get(configuration, 'qa', {});

module.exports = env => {
    const { publicPath = '/assets/' } = env;

    return {
        output: {
            chunkFilename: '[id].[name].[chunkhash].chunk.js',
            filename: '[id].[name].[chunkhash].js',
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
                filename: 'index.prod.html',
                configJson: JSON.stringify(prodConfigToUse)
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.stage.html',
                configJson: JSON.stringify(stageConfigToUse)
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.qa.html',
                configJson: JSON.stringify(qaConfigToUse)
            })
        ]
    };
};
