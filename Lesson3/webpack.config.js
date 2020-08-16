const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:  {
    app: path.join(__dirname, 'www', 'main.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s([ca])ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'www', 'index.html')
      }),

      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: path.join(__dirname, 'src', 'assets'), to: path.join(__dirname, 'dist', 'assets')
      //     }
      //   ]
      // })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080
  }
};
