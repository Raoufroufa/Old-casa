const Property = require('./property');
const mongoose = require('mongoose');

const Sale = Property.discriminator('Sale', new mongoose.Schema({}));

module.exports = mongoose.model('Sale'); 