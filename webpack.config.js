const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './source/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'index.js',
  },
  devtool: 'source-map',
  mode: 'development',

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'source')
        ],
        exclude: [
          path.resolve(__dirname + 'node_modules')
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  'targets': {
                    'chrome': 59,
                    'ie': 11
                  }
                }
              ],
              '@babel/react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }]
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css'
    })
  ]
}
