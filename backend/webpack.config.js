const path = require("path");

const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	context: __dirname,
	mode: slsw.lib.webpack.isLocal ? "development" : "production",
	entry: slsw.lib.entries,
	devtool: slsw.lib.webpack.isLocal ? "eval-cheap-module-source-map" : "source-map",
	resolve: {
		extensions: [".json", ".js"],
		symlinks: false,
		cacheWithContext: false,
		plugins: [],
		modules: ["src"]
	},
	output: {
		libraryTarget: "commonjs",
		path: path.join(__dirname, ".webpack"),
		filename: "[name].js"
	},
	optimization: {
		concatenateModules: false
	},
	target: "node",
	externals: [nodeExternals()],
	module: {
		rules: []
	},
	plugins: []
};
