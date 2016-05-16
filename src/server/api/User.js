module.exports.register = (req, res) => {
  res.json({success: true, message: 'reg'})
}

module.exports.authenticate = (req, res) => {
  res.json({success: false, message: 'auth'})
}
