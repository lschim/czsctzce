var getConfig = require('hjs-webpack')
var config = getConfig({
  html: false,
  isDev: true,
  in: 'client/application.js',
  out: 'public',
  clearBeforeBuild: '!(videos/ | style/)'
})

// Extends hjs generated config
config.entry = {
  level1: './client/javascripts/level1.js',
  main: config.entry

}

config.output.filename = '[name].js'

module.exports = config
