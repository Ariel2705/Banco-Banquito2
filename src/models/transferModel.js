const mongoose = require('mongoose');
const {Schema} = mongoose;

const TransferSchema = new Schema({
    sender: {type: String, requiere: true},
    receiver: {type: String, requiere: true},
    date: {type: String, required: true },
    type: {type: String, required: true },
    description: {type: String, required: true }
}, { collection: 'transfer' });

module.exports = mongoose.model('transfer', TransferSchema);