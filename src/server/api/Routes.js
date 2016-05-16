const user = require('./User')

module.exports = function (app) {
  app.get('/register', user.register)
  app.get('/authenticate', user.authenticate)
}
