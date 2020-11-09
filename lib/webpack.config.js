module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: false,
  output: {
    library: {
      name: 'lib',
      type: 'umd'
    },
  },
};
