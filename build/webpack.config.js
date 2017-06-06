var path = require('path');
var HtmlWebpackPlugin  =require('html-webpack-plugin');

module.exports = {
    entry:{
      app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'../static'),
        filename: "[name].js",
        chunkFilename: '[id].[chunkhash].js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
        'vue$': 'vue/dist/vue.js',
        '@': '../src',
        'components': path.resolve(__dirname,'../src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
