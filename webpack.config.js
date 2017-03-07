const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const root = path.resolve(__dirname);
const src = path.resolve(root, 'src');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './components/index.js',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['latest', {
                  'es2015': {
                    'loose': true,
                    'modules': false
                  }
                }],
                'react'
              ],
              plugins: [
                "transform-class-properties",
                "transform-export-extensions",
                "transform-object-rest-spread",
              ],
            },
          },
        ],
      }, {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./src/index.html')
    }),
    new CaseSensitivePathsPlugin(),
  ],
};
