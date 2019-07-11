const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configLoader = require('../config/configLoader');

module.exports = (env) => {
    const configuration = configLoader.getConfig();
    const configEnv = _.get(env, 'config', 'local');
    const configToUse = _.get(configuration, configEnv, {});

    const envPrefixes = {
        production: '',
        qa: 'qa-',
        stage: 'stage-',
        local: 'qa-'
    };
    const envPrefix = envPrefixes[env.config] || envPrefixes.qa;

    return {
        devServer: {
            hot: true,
            historyApiFallback: true,
            disableHostCheck: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    secure: false
                },
                '/public/*': {
                  target: 'http://localhost:3000/',
                  secure: false
                }
              }
        },

        output: {
            publicPath: '/'
        },

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new WriteFilePlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                filename: './index.html',
                configJson: JSON.stringify(configToUse)
            })
        ],
        devtool: 'inline-source-map'
    };
};
