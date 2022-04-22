const path = require("path");

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
