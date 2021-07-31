const mongoose = require('mongoose')

const TicketSchema = mongoose.Schema({
  id: String,
  department: String,
  customerPhoneNumber: String,
  customerReply: String,
  content: String,
  execStatus: String,
  createdAt: String,
  execAt: String
})

const TicketModel = mongoose.model('Ticket', TicketSchema)

module.exports = TicketModel
