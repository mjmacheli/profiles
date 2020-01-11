const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    context: path.join(__dirname, 'src'),

    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './index.html',
            title: 'Whats Up'
        })
    ]
}

module.exports = config