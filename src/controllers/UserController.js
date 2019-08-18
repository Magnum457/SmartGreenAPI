// libs
const axios = require('axios')

// models
const User = require('../models/Users')

// controllers
const UserController = {
    async store(req, res) {
        // dados
        const data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha
        }
        const user = new User(data)

        // chamada a API
        try{
            await user.save((err, user) => {
                if(err) res.json(err)
                res.json(user)
            })
        } catch(err) {
            res.json({ message: 'erro ao inserir os dados' })
        }
    },

    async index(req, res) {
        try{
            await User.find((err, users) => {
                if(err) res.json(err)
                res.json(users)
            })
        } catch(err) {
            res.json({message: 'erro'})
        }
    },

    async show(req, res) {
        // dados
        const { user } = req.headers

        try{
            await User.findById( user, (err, users) => {
                if(err) res.json(err)
                res.json(users)
            })
        } catch(err) {
            res.json({message: 'erro'})
        }
    },

    async update(req, res) {
        
    },

    async delete(req, res) {
        // dados
        const { user } = req.headers

        try{
            await User.findByIdAndDelete(user, (err) => {
                if(err) res.json(err)
                res.json({ message: 'usuario deletado' })
            })
        } catch(err) {
            res.json({ message: 'erro' })
        }

    }
}

// exports
module.exports = UserController