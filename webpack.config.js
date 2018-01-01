const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED IN THIS STEP

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = {
    context: __dirname + "/app",
  
    entry: {
        javascript: "./js/app.js"
    },

    output: {
      filename: "app.js",
      path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          // CSS loader for CSS files
          // Files will get handled by css loader and then passed to the extract text plugin
          // which will write it to the file we defined above
          {
            test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }),
          },
          // File loader for image assets -> ADDED IN THIS STEP
          // We'll add only image extensions, but you can things like svgs, fonts and videos
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
        ]
    },

    plugins: [HTMLWebpackPluginConfig,
              new ExtractTextPlugin('style.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
    ]

};