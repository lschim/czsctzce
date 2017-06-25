var getConfig = require('hjs-webpack')
var config = getConfig({
  html: false,
  isDev: true,
  in: 'client/application.js',
  out: 'public',
  clearBeforeBuild: '!(videos/ | style/ | images/)'
})

// Extends hjs generated config
config.entry = {
  level1: './client/javascripts/level1.js',
  level2: './client/javascripts/level2.js',
  level3: './client/javascripts/level3.js',
  main: config.entry

}

config.output.filename = '[name].js'

module.exports = config
