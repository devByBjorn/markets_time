const path = require('path')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const currentYear = new Date().getFullYear();

module.exports = {
  entry: {
    index: './src/index.js',
    world: './src/world.js',
    americas: './src/americas.js',
    asiaOceania: './src/asiaOceania.js',
    europe: './src/europe.js',
    nordics: './src/nordics.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // To strip all locales except “en”
    new MomentLocalesPlugin(),
    new MomentTimezoneDataPlugin({
      startYear: currentYear,
      endYear: currentYear + 1,
    }),
  ],
  mode: 'development'
}