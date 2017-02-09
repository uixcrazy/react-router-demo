// var WebpackDevServer = require("webpack-dev-server");
// var webpack = require("webpack");

/**
 * docs: http://webpack.github.io/docs/webpack-dev-server.html
 */

import webpack from 'webpack';
import express from 'express';
import path from 'path';
import fs from 'fs';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';
const DEV_PORT = 9009;
const HOST_NAME = 'localhost';

const router = express.Router();
const pluginDefine = new webpack.DefinePlugin({
  window: 'window',
  'process.env': {
    'NODE_ENV': JSON.stringify('development'),
  },
});
config.plugins.push(pluginDefine);

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {

  contentBase: '/public',
  hot: true,
  inline: true,
  historyApiFallback: false,
  staticOptions: {
  },
  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: false,
  filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: "/public/",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true }
});

router.get('/demo', (req, res) => {
  res.send('Hello World!');
});

router.get('/:demo_page', function(req, res) {
  res.sendFile(path.join(__dirname, `../app/${req.params.demo_page}/index.html`), 'utf-8');
});

server.use(router);
server.listen(DEV_PORT, HOST_NAME, () => {
  console.log(`Server start at ${HOST_NAME} on port: ${DEV_PORT}`);
});
// server.close();
