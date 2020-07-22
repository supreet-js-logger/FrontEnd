/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { merge } = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const zlib = require("zlib");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    pathinfo: false,
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    // }),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    // new UglifyJsPlugin({
    //   cache: true,
    //   parallel: true,
    //   sourceMap: true,
    // }),
  ],
  performance: {
    hints: "warning",
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
