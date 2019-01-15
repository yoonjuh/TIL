const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    /** dev server setup */
    port: 9000
  },
  devtool: 'source-map' /** Chrome debugger settings */
});
