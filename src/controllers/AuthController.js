// libs
const axios = require('axios')
const jwt = require('jsonwebtoken')

// models
const User = require('../models/Users')

// config
const authConfig = require('../config/auth')

// controller
const AuthController = {
    async auth (req, res) {
        const { login, senha } = req.body

        const user = await User.findOne({ login, senha })

        if(!user) {
            return res.status(400).json({ message: 'Usuario não encontrado' })
        }

        user.senha = undefined

        const token = jwt.sign({ id: user._id }, authConfig.secret, {
            expiresIn: 86400
        })

        res.json({user, token})
    }
}

// exports
module.exports = AuthController