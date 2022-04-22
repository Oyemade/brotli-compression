const path = require("path");

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new BrotliPlugin({
      asset: "[file-name].br",
    }),
  ],
};
