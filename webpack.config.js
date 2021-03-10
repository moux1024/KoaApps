const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const webpack = require("webpack");

const { readdirSync } = require("fs"),
  pathlist = readdirSync("./apps");
const entrys = pathlist.reduce((result, item) => {
  result[item] = "./apps/" + item + "/app.js";
  return result;
}, {});
console.log(entrys);
entrys["webpack-hot-middleware/client"]="webpack-hot-middleware/client";
module.exports = {
  entry: entrys,
  output: {
    filename: "[name].[fullhash:6].js",
    path: __dirname + "/dist",
    publicPath: '/',
  },
  module: {
    rules: [{ test: /\.vue$/, use: "vue-loader" }],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      deps: path.resolve(__dirname, "deps/"),
    },
  },
  devServer: {
    hot: true,
  },
};
