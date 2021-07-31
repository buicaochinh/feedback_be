const Ticket = require('../models/ticketModel')

class TicketController {
  getAllTicket(req, res) {
    Ticket.find({}).exec((err, tickets) => {
      if (err) {
        res.status(404).send({ message: "Not Found" })
        return
      }
      res.status(200).json({ tickets })
    })
  }
  getTicket(req, res) {
    Ticket.findById({ _id: req.params.id }).exec((err, ticket) => {
      if (err) {
        res.status(404).send({ message: "Not Found" })
        return
      }
      res.status(200).json({ ticket })
    })
  }
  createTicket(req, res) {
    const newTicket = new Ticket({
      customerName: req.body.customerName,
      customerPhoneNumber: req.body.customerPhoneNumber,
      customerReply: req.body.customerReply,
      idDepartment: req.body.idDepartment,
      execStatus: 'pending',
      execContent: '',
      execAt: '',
      createdAt: new Date().toISOString()
    })
    newTicket.save((err, ticket) => {
      if (err) {
        res.status(500).json({
          message: 'Create Failed'
        })
        return
      }

      res.status(200).json({ ticket })
    })
  }
  deleteTicket(req, res) {
    Ticket.remove({ _id: req.params.id }).exec((err) => {
      if (err) {
        res.status(500).json({ message: 'Delete failed' })
        return
      }
      res.status(200).json({ message: 'Deleted!'})
    })
  }
}

module.exports = new TicketController
