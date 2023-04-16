const Property = require('./property');
const mongoose = require('mongoose');

const Room_sharing = Property.discriminator('Room_sharing', new mongoose.Schema({
    persons_number : {
        type: Number,
        required: true
    }
}));

module.exports = mongoose.model('Room_sharing'); 