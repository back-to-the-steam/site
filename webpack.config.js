const path = require('path');

module.exports = {
  entry: './src/index.tsx', // point d'entrée
  output: {
    filename: 'main.js',     // fichier compilé
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: './build',
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'production',
};
