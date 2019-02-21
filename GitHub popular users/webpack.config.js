const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		rules: [
			// {
		    //     enforce: "pre",
		    //     test: /\.js$/,
		    //     exclude: /node_modules/,
		    //     loader: "eslint-loader",
      		// },
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "env", "stage-2"]
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style-loader','css-loader']
			},
			{
				test: /\.less$/,
				loader: 'less-loader'
			}
		]
	}
};

module.exports = config;
