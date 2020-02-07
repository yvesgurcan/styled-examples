const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const loadPresets = require('./build-utils/loadPresets');

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);
const packageJson = require('./package.json');

module.exports = (env = {}) => {
    const { mode = 'production', presets = [], config = 'qa' } = env;

    const normalizedEnv = {
        ...env,
        mode,
        presets,
        config
    };

    return webpackMerge(
        {
            entry: {
                [`${packageJson.name}.${packageJson.version}`]: [
                    '@babel/polyfill',
                    './src/index.js'
                ]
            },

            mode,

            module: {
                rules: [
                    {
                        test: /\.js|jsx$/,
                        loader: 'babel-loader',
                        exclude: [
                            /node_modules\/(?!(@cbtnuggets\/lib-react-cbt-components)\/).*/
                        ],
                        options: {
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-env',
                                {
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-syntax-dynamic-import'
                                    ]
                                }
                            ]
                        }
                    },

                    {
                        test: /\.(png|jpg|woff|woff2|eot|ttf|gif|svg)(\?[a-z0-9=.]+)?$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 1
                                }
                            }
                        ]
                    },

                    {
                        test: /\.(pdf|zip)$/,
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]
            },

            resolve: {
                symlinks: false,
                alias: {
                    lodash: path.resolve(__dirname, 'node_modules/lodash'),
                    joi: 'joi-browser'
                }
            },

            plugins: [
                new webpack.DefinePlugin({
                    process: `Object({ env: { NODE_ENV: '${mode}' } })`
                }),
                new webpack.ProgressPlugin()
            ]
        },

        modeConfig(normalizedEnv),

        loadPresets(normalizedEnv)
    );
};
