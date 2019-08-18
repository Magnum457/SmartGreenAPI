// libs
const { model, Schema } = require('mongoose')

// Schema
const SoilSchema = new Schema({
    fazenda: {
        type: String,
        required: true
    },
    campo: {
        type: String,
        required: true
    },
    ponto_monitoramento: {
        type: Number,
        required: true
    },
    profundidade: {
        type: Number,
        required: true
    },
    umidade: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

// exports
module.exports = model('Soil', SoilSchema)