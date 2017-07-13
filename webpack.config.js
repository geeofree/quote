const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: __dirname + '/src/app.main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        include: __dirname + '/src',
        use: ExtractTextPlugin.extract(['sass-loader', 'css-loader', 'postcss-loader'])
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public',
    hot: true,
    compress: true,
    port: 3000
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
