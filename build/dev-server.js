// webpack-dev-middleware中间件，它是对webpack一个简单的包装，它可以通过连接服务器服务那些从webpack发射出来的文件，它有一下几点好处：
// 1、不会向硬盘写文件，而是在内存中，注意我们构建项目实际就是向硬盘写文件。
// 2、当文件改变的时候，这个中间件不会再服务旧的包，你可以直接刷新浏览器就能看到最新的效果，这样你就不必等待构建的时间，所见即所得。


var express = require('express');
var webpack = require('webpack');
var config = require('./webpack-dev-conf');

//创建express实例
var app =express();
// 调用webpack并把配置传递过去
var compier = webpack(config);
// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compier,{
    publicPath: config.output.publicPath,
    stats:{
        colors:true,
        chunk:false
    }
});
var hotMiddleware = require('webpack-hot-middleware')(compier, {
    log: () => {}
})
// html-webpack-plugin模板更改时强制页面重新加载
compier.plugin('compilation',function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit',function (data, cb) {
        // 发布事件
        hotMiddleware.publish({action:'reload'});
        cb();
    })
})
app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(8888,function (err) {
    if(err) {
        console.log(err)
        return;
    }
    console.log('Listening at http://localhost:8888');
})