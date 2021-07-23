const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
    _id: mongoose.ObjectId,
    member: {
        type: Schema.Types.ObjectId,
        ref: 'adherent',
        require: true
    },
    date: String,
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'provider'
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'billsale'
    },
    price_tot: Number
}, { collection: 'bill', versionKey: false });

module.exports = mongoose.model('Bill', billSchema);