const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

    mode: 'development',
    entry: './svelte/index.js',
    watchOptions: {
        poll: 2000,
    },
    output: {
        path: path.resolve(__dirname, 'static/js/'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.mjs', '.js','.svelte'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
};