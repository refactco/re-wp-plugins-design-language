/* eslint-disable @typescript-eslint/naming-convention */

const { join } = require('path');
const { ProvidePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: join(__dirname, './example/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'webpack-dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
      },
      {
        test: /\.svg/,
        exclude: /node_modules/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(css)/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  // watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@elements': join(__dirname, './src/elements'),
      '@base': join(__dirname, './src/base'),
      '@components': join(__dirname, './src/components')
    }
  },
  plugins: [
    new ProvidePlugin({
      React: 'react'
    }),
    new Dotenv()
  ],
  devServer: {
    static: {
      directory: join(__dirname, './example')
    },
    port: 5000,
    devMiddleware: {
      publicPath: '/webpack-dist/'
    },
    hot: 'only',
    historyApiFallback: { index: '/', disableDotRule: true }
  }
};
