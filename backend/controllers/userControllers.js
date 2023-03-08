const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const getUsers = async (req, res) => {
  try {
    res.json(await User.find())
  } catch {
    res.status(500).send()
  }
}

const registerUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) res.send({ msg: 'taken' })
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create({ email: req.body.email, name: req.body.name, password: hashedPassword })
    if (newUser) {
      res.status(201).send({
        msg: 'success',
        name: newUser.name,
        token: generateToken(newUser._id)
      })
    }
  } catch {
    res.status(500).send()
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      res.send({
        msg: 'Success!',
        name: user.name,
        token: generateToken(user._id)
      })
    } else {
      res.send({ msg: 'invalid' })
    }
  } catch {
    res.status(500).send()
  }
}

const getMe = async (req, res) => {
  const { name, email } = await User.findById(req.user.id)
  res.status(200).json({ name, email })
}

// Generate jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  getMe
}