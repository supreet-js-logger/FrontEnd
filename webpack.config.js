const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = dotenv.config().parsed;
const AssetsPlugin = require("assets-webpack-plugin");

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  // the app entry point is /src/index.js
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: "babel-loader",
        // options: {
        //   // attach the presets to the loader (most projects use .babelrc file instead)
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        //   plugins: ["@babel/plugin-transform-async-to-generator"],
        // },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.DefinePlugin(envKeys),
    new AssetsPlugin({
      prettyPrint: true,
      filename: "assets.json",
      path: path.resolve(__dirname, "dist"),
    }),
  ],
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
