// libs
const axios = require('axios')

// models
const Soil = require('../models/Soil')

// controller
const SoilController = {
    async store(req, res) {
        // dados
        const data = {
            fazenda: req.body.fazenda,
            campo: req.body.campo,
            ponto_monitoramento: req.body.ponto_monitoramento,
            profundidade: req.body.profundidade,
            umidade: req.body.umidade
        }
        const soil = new Soil(data)

        // chamada a API
        try{
            await soil.save((err, soil) => {
                if(err) res.json(err)
                res.json(soil)
            })
        } catch(err) {
            res.json({ message: 'erro ao inserir os dados' })
        }
    },

    async index(req, res) {
        try{
            await Soil.find((err, soil) => {
                if(err) res.json(err)
                res.json(soil)
            })
        } catch(err) {
            res.json({ message: 'erro ao recuperar os dados' })
        }
    },

    async show(req, res) {
        // dados
        const { id } = req.headers

        // chamada a API
        try{
            await Soil.findById( id, (err, soil) => {
                if(err) res.json(err)
                res.json(soil)
            })
        } catch(err) {
            res.json({ message: 'erro ao recuperar o dado' })
        }
    },

    async update(req, res) {

    },
    
    async delete(req, res) {
        // dados
        const { id } = req.headers

        try{
            await Soil.findByIdAndDelete(id, (err) => {
                if(err) res.json(err)
                res.json({ message: 'solo deletado com sucesso' })
            })
        } catch(err) {
            res.json({ message: 'erro ao deletar' })
        }
    }
}

// exports
module.exports = SoilController