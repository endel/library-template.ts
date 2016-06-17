const webpack = require('webpack')
const path = require('path')

module.exports = (function(options) {

  return {
    entry: {
      main: __dirname + "/src/index.ts"
    },

    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },

    extensions: ['.ts', '.js', '.json'],

    devtool: 'source-map',

    module: {
      loaders: [
        { test: /\.ts$/, loader: "awesome-typescript-loader" }
      ]
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ],

    resolve: {
      root: [ path.join(__dirname, "./node_modules"), path.join(__dirname, "./src") ]
    }


  }
})()
