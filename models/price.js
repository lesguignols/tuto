const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String,
    price: Number,
    active: Boolean
}, { collection: 'price' });

module.exports = mongoose.model('Price', priceSchema);