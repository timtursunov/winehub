const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['white', 'red', 'rose']
    },
    grape: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    instock: {
        type: Boolean,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;