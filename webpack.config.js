
'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  // css单独打包
var path = require('path');
console.log(process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === 'dev-HRM';

var config = {
  devtool: isDev ? 'eval-source-map' : '',
  entry: {
    resume: [
      __dirname + '/src/index.jsx'
    ]// 唯一入口文件
  },
  output: {
    path: './dist', //  打包后的文件存放的地方
    publicPath: '/dist/', // 静态资源文件内的请求路径指向静态资源服务器
    filename: '[name].bundle.js' // 打包后输出文件的文件名
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'jsx!babel', include: /src/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      { test: /\.(png|jpg|svg)$/, loader: 'url?limit=8192' }
    ]
  },
  devServer: {
    contentBase: './',  // 本地服务器所加载的页面所在的目录
    port: 8080,
    colors: true,  // 终端中输出结果为彩色
    // historyApiFallback: true,  // 不跳转
    inline: true,
    hot: process.env.NODE_ENV === 'dev-HMR' // Hot module replacement
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    fallback: [path.resolve(__dirname, './node_modules')],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin() // 同命令行中的 --hot
  ]
};

if (process.env.NODE_ENV !== 'dev-HMR' && process.env.NODE_ENV !== 'dev') {
  config.externals = { // dev 这里应该不加 react 和 react-dom 的 external, prd 要加
    'react': 'window.React',
    'react-dom': 'window.ReactDOM'
  };
}

module.exports = config;
