const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model 
const UserSchema = new Schema({
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
    }
});

const Property = mongoose.model('property', UserSchema);

module.exports = Property;