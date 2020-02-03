const path = require('path')

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
  mode: 'development'
}