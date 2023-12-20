const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env.mode || 'development',
        entry: {
            main: path.resolve(__dirname, 'src', 'js', 'index.js'),
        },
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'dist', 'assets') },
                ],
            }),
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devServer: {
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
            ]
        }
    };
}