const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'www'),
    host: 'localhost',
    https: true
  },
  devtool: 'inline-source-map',
};

