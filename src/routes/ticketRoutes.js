const express = require('express')
const router = express.Router()

const ticketController = require('../controllers/ticketController')

router.route('/')
  .get(ticketController.getAllTicket)
  .post(ticketController.createTicket)
router.route('/:id')
  .get(ticketController.getTicket)
  .delete(ticketController.deleteTicket)

module.exports = router
