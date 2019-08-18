// libs
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// rotas
const routes = require('./routes')

// servidor http
const httpServer = express()

// conexao com o mongoDB
mongoose.connect('mongodb+srv://smartgreen:smartgreen@cluster0-ftmkt.mongodb.net/smartgreen?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// chamada das rotas
httpServer.use(cors())
httpServer.use(express.json())
httpServer.use(routes)

// chamada na porta 3333
httpServer.listen(3333)