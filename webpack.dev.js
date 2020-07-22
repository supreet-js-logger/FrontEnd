// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    pathinfo: false,
  },
  devServer: {
    allowedHosts: ["http://app.logger.com/"],
    // disableHostCheck: true,
    // open: false,
    historyApiFallback: true,
    // hot: false,
    // inline: false,
    // liveReload: false,
    contentBase: "./dist",
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", //MiniCssExtractPlugin.loader, // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
