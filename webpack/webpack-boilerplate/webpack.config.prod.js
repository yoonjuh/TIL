const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      /** This plugin will give us a report about our app like bundle sizes and which libraries are making bundle size bigger, etc... */
      analyzerMode: 'static',
      // openAnalyzer: false,
      reportFilename: 'bundle_sizes.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});
