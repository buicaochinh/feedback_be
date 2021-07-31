const mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({
  id: String,
  name: String,
  createdAt: String
})

const DepartmentModel = mongoose.model('Department', DepartmentSchema)

module.exports = DepartmentModel
