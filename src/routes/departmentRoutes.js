const express = require('express')
const router = express.Router()

const departmentController = require('../controllers/departmentController')

router.route('/')
  .get(departmentController.getAllDepartment)
  .post(departmentController.createDepartment)
router.route('/:id')
  .put(departmentController.updateDepartment)
  .get(departmentController.getDepartment)
  .delete(departmentController.deleteDepartment)

module.exports = router
