const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    technology: {
        type: String,
        require: true
    },
    sub1: {
        type: Boolean,
        require: true,
        default: false
    }
})

module.exports = mongoose.model('schema1', schema)