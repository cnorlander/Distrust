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
                include: [
                    path.resolve(__dirname, "svelte")
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svelte$/,
                include: [
                    path.resolve(__dirname, "svelte")
                ],
                use: {
                    loader: 'svelte-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.svelte'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
};