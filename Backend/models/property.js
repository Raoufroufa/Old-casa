const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model 
const PropertySchema = new Schema({
    type: {
      type: String,
      required: true,
    },
    id_category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category'
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: 'user',
    },
    rooms: {
      type: Number,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    equipped: {
        type: Boolean,
        required: true,
    },
    description: {
      type: String,
      required: true,
    }
  });

const Property = mongoose.model('property', PropertySchema);

module.exports = Property;