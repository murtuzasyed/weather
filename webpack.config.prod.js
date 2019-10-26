const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-analyzer.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});
