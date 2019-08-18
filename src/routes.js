// libs
const express = require('express')

// controllers
const UserController = require('./controllers/UserController')
const SoilController = require('./controllers/SoilController')

// rotas
const routes = express.Router()

    // users
    routes.post('/users', UserController.store)
    routes.get('/users', UserController.index)
    routes.get('/users/show', UserController.show )
    routes.put('/users', UserController.update)
    routes.delete('/users', UserController.delete)

    // soil
    routes.post('/soil', SoilController.store)
    routes.get('/soil', SoilController.index)
    routes.get('/soil/show', SoilController.show)
    routes.put('/soil', SoilController.update)
    routes.delete('/soil', SoilController.delete)


module.exports = routes