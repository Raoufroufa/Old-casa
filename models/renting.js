const Property = require('./property');
const mongoose = require('mongoose');

const Renting = Property.discriminator('Renting', new mongoose.Schema({
    duration: {
      type: Date,
      required: true,
    },
    contract_type: {
      type: String,
      required: true
    },
    rent_sharing: {
        type: Boolean,
        required: true,
    }
}));

module.exports = mongoose.model('Renting'); 