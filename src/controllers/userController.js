const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

class UserController {

  signup(req, res) {
    if (req.body.password !== req.body.repeatPassword) {
      res.status(400).send({ message: "Repeat password is not equal to password!" })
      return
    }
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    })
    user.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return
      }
      res.status(200).send({ message: "User was registered successfully!", user })
    })
  }

  signin(req, res) {
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH_KEY, {
        expiresIn: 24 * 60 * 60
      });
      res.status(200).send({
        accessToken: token
      })
    })
  }
}

module.exports = new UserController
