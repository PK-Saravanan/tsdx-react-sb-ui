
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./app-sb.cjs.production.min.js')
} else {
  module.exports = require('./app-sb.cjs.development.js')
}
