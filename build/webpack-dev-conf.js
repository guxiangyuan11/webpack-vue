
// 为了不修改基本配置文件，创建webpack.dev.conf.js文件,来达到修改基本文件中的属性
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfi = require('./webpack.config');
var path = require('path');
var webpack = require('webpack');

webpackConfi.output.publicPath = '/';
webpackConfi.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin ({
        filename: 'index.html',
        template: path.resolve(__dirname,'../index.html'),
        inject:true
    })
];
var devClient = './build/dev-client';
Object.keys(webpackConfi.entry).forEach(function (name, i) {
    var extras = [devClient]
    webpackConfi.entry[name] = extras.concat(webpackConfi.entry[name])
})

module.exports = webpackConfi;
