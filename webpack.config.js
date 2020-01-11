const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

require('dotenv').config()

const config = {
    mode: 'development',
    context: path.join(__dirname, 'src'),

    entry: './Index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'Index.js')  
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [
                    'style-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use: 'file-loader'
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