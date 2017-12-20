var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/, //Match both .js and .jsx
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'app/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, 'node_modules')
        ]),
        new webpack.HotModuleReplacementPlugin([])
    ],

    devServer: {
        hot: false,
        inline: true,
        contentBase: "dist",
        historyApiFallback: false,
        compress: true,

        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        }
    }

}