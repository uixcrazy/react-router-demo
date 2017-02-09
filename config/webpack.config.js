
import webpack from 'webpack';
import path from 'path';

const DEV_PORT = 9009;
const HOST_NAME = 'localhost';

export default {
  devtool: 'source-map',
  entry: {
    demo: ['./app/src/index.js', 'webpack/hot/dev-server'],
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: `http://${HOST_NAME}:${DEV_PORT}/public/`,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
      },
      {
        test: /\.scss$/,
        // loaders: ["style", "css", "sass"] // compile to <style> tag
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
      },
      {
        test: /\.(png|jpg|svg|gif|eot|woff|ttf)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|ext-lib)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          // presets: ['es2015']
          plugins: ['transform-runtime'],
        }
      },
    ],
    // noParse: [
    //   /ext-lib[\\\/].+\.js/i,
    // ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  profile: true,
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    // alias: {
    //   animate: path.join(__dirname, '../../node_modules/animate.css/source'),
    //   normalize: path.join(__dirname, '../../node_modules/normalize.css')
    // }
  },
};
