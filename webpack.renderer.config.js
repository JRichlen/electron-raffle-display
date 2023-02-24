const rules = require('./webpack.rules');

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
