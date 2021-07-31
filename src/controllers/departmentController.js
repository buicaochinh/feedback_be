const Department = require('../models/departmentModel')

class DepartmentController {
  getAllDepartment(req, res) {
    Department.find({}).exec((err, departments) => {
      if (err) {
        res.status(404).json({ message: 'Not Found' })
        return
      }
      res.status(200).json({ departments })
    })
  }
  createDepartment(req, res) {
    const department = new Department({
      name: req.body.name,
      createdAt: new Date().toISOString()
    })
    department.save((err, department) => {
      if (err) {
        res.status(500).json({ message: 'create failed!' })
        return
      }
      res.status(200).json({ message: 'successfully!' })
    })
  }
  getDepartment(req, res) {
    Department.findById({ _id: req.params.id }).exec((err, department) => {
      if (err) {
        res.status(404).json({ message: 'Not Found!' })
        return
      }
      res.status(200).json({ department })
    })
  }
  updateDepartment(req, res) {
    Department.updateOne({ _id: req.params.id }, {
      name: req.body.name,
      createdAt: new Date().toISOString()
    })
    res.status(200).json({ message: 'Updated!'})
  }
  deleteDepartment(req, res) {
    Department.remove({ _id: req.params.id }).exec((err) => {
      if (err) {
        res.status(500).json({ message: 'delete failed!'})
        return
      }
      res.status(200).json({ message: 'deleted!' })
    })
  }

}

module.exports = new DepartmentController
