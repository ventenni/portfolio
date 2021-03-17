const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        options: {
          url: true,
        },
      },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
    'file-loader',
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
    loader: 'url-loader'
  }
    ],
  },
};