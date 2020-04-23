/* jshint esversion: 7 */
const autoprefixer = require('autoprefixer');

module.exports = [{
  devServer: {
    host: "0.0.0.0"
  },
  entry: ["./app.scss", "./app.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css'
          }
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
             plugins: () => [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require("sass"),
            webpackImporter: false,
            sassOptions: {
              includePaths: ['./node_modules']
            },
          }
        }
      ]
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env'],
      },
    }]
  }
}];
