var webpack = require("webpack")

module.exports = {
  entry:  {
    a: "./a.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {test: /\.css$/,loader: "style!css!"}
    ]
  },
  resolve: {
    root: [
      __dirname + "/dist",
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
 
}