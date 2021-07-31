const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  id: String,
  email: String,
  fullName: String,
  password: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
