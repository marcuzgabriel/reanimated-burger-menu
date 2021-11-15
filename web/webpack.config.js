const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, '/build/');
const babelConfig = require('../babel.config');

const dev = process.env.NODE_ENV === 'development';

delete babelConfig.plugins[0][1].alias['^react-native$'];

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: {
    app: path.join(__dirname, '../src/index.web.ts'),
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'react-native-web-image-loader',
          },
        ],
      },
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
        include: [
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '..', 'node_modules', 'react-native-render-html'),
          path.resolve(__dirname, '..', 'node_modules', 'react-native-reanimated'),
          path.resolve(__dirname, '..', 'node_modules', 'react-native-gesture-handler'),
        ],
        // react-native-web is already compiled.
        exclude: [`${path.resolve(__dirname, '..', 'node_modules', 'react-native-web')}$`],
      },
    ],
  },
  output: {
    path: outputPath,
    filename: 'javascript/[name].[contenthash].bundle.js',
    chunkFilename: 'javascript/lib-[name]-[chunkhash].bundle.js',
    publicPath: './',
    crossOriginLoading: 'anonymous',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: process.env.NODE_ENV === 'development',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'web/index.html.template.js',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    modules: [path.join(__dirname, '..', 'node_modules'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.web.js', '.js', '.json', '.cjs'],
  },
};
