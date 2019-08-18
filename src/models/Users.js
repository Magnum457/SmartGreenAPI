// libs
const { model, Schema } = require('mongoose')

// Schema
const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

// exports
module.exports = model('Users', UserSchema)