require('babel-register')
require('babel-polyfill')

var server = require('./server/server')

server.listen(3000, () => { console.log('app running on port 3000') })