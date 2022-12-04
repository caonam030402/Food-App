const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
})

const Pizza = mongoose.model('Pizza', PizzaSchema)

module.exports = Pizza