const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    curriculum: String,
    wording: String,
    year: Number
}, { collection: 'training' });

module.exports = mongoose.model('Training', trainingSchema);