const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productmapSchema = new Schema({
    _id: mongoose.ObjectId,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: Number
}, { collection: 'productMap', versionKey: false });

module.exports = mongoose.model('ProductMap', productmapSchema);