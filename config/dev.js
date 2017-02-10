/**
 * docs: http://webpack.github.io/docs/webpack-dev-server.html
*/

import webpack from 'webpack';
import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';
import { DEV_PORT, HOST_NAME } from './const.js';

const router = express.Router();
const server = new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, 'public'),
  compress: true,
  publicPath: '/assets/',
  lazy: false,
  headers: {
    'X-Custom-Foo': 'bar',
  },
  hot: true,
  inline: true,
  historyApiFallback: false,
  stats: { colors: true },
  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
});

router.get('/demo', (req, res) => {
  res.send('Hello Router Express!');
});

router.get('/:anything', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/index.html'), 'utf-8');
});

// router.get('/:demo_page', (req, res) => {
//   res.sendFile(path.resolve(__dirname, `../app/${req.params.demo_page}/index.html`), 'utf-8');
// });

server.use(router);
server.listen(DEV_PORT, HOST_NAME, () => {
  console.log(`Server start at ${HOST_NAME} on port: ${DEV_PORT}`);
});
// server.close();
