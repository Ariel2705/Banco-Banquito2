const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransactionSchema = new Schema({
    sender: {type: String, requiere: true},
    receiver: {type: String, requiere: true},
    date: {type: String, required: true },
    type: {type: String, required: true },
    description: {type: String, required: true }
}, { collection: 'transaction' });

module.exports = mongoose.model('transaction', TransactionSchema);