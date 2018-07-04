const path              = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let   FaviconsWebpack   = require('favicons-webpack-plugin');
var   sass              = require('sass');
const constants         = require("./constants");


var clientConfig = (function webpackConfig() {
  var config = Object.assign({});
  config.mode = 'development',
  config.entry = ['./src/js/index.js','./src/scss/index.scss',];
  config.output = {path: path.resolve(__dirname, 'dist'), filename: 'js/main.js'};
	config.devtool = 'source-map';
  config.module = {
    rules: [
			{test: /\.js$/,
				exclude: /node_modules/,
				use: {loader: 'babel-loader',
				options: {presets: ['babel-preset-env']}}
			},
			{test: /\.(sa|sc|c)ss$/,
				include: path.resolve(__dirname, 'src/scss'),
				use: ExtractTextPlugin.extract({
				fallback: "style-loader",
					use:[
						{loader: 'css-loader', options: {url: false,minimize: false,sourceMap: true}},
						{loader: 'sass-loader', options: {sourceMap: true}}
					],	publicPath:'./css/'
				})
			}/*,
			{test: /\.(png|jpg|gif|svg)$/,
				use: [
					{loader: 'file-loader',
					options: {name: './img/[name].[ext]',
					context: path.resolve(__dirname, "./img")}
					}]
			},
			{test: /\.(ttf|eot|woff|woff2)$/,
				use:
					{loader: "file-loader",
					options: {name: "[name].[ext]",
					context: path.resolve(__dirname, "./fonts")}}
			}*/
		]
  }
	config.resolve = {};

	config.plugins = [
	  new ExtractTextPlugin({
	    filename:'./css/index.css',
	    allChunks: true,
	  }),
	  new HtmlWebpackPlugin({
	    files: {
        "css": [ "index.css" ],
				"js" : [ "js/main.js"],
				"chunks": {	"head": {"entry": "", "css": [ "css/index.css" ]},
										"main": {"entry": "js/main.js", "css": []}},
	    },
	    title: constants.HTML_TITLE,
	    author: constants.HTML_AUTHOR,
	    //minify: {collapseWhitespace: true},
	    filename: '../dist/index.html',
	    template: './src/html/template/index.html'
        }),
	  new FaviconsWebpack({
      logo: './src/img/favicon/favicon.jpg',
      prefix: 'img/favicon/',
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
	    background: '#fff',
      title: 'Webpack App',
	    icons: {android: false,appleIcon: false,appleStartup: false,coast: false,favicons: true,
                firefox: true, opengraph: false,twitter: false,yandex: false,windows: false}
	  })
	]
	/*config.plugins.push(
		new Plugin()
	)
	config.plugins.push(
		new Plugin()
	)*/


return config;
});
module.exports = clientConfig;
