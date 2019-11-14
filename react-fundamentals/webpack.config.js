const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./src/index'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/',
    },

    // devSever: {
    //     hot: true,
    //     inline: true,
    //     host: '0.0.0.0',
    //     port: 4000,
    //     contentBase: path.join(__dirname, 'public'),
    // },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env',{
                            targets: {
                                browsers: ['> 1% in KR'], // browserslist
                            },
                            debug: true,
                        }], 
                        '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel',
                    ],
                },
            }
        ]
    },
}