const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval", // production 일 때는, hidden-sourse-map
  resolve: {
    extensions: [".jsx", ".js"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/app", "dist"),
    filename: "app.js",
  },
};
