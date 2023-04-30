const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// create category Schema & model 
const CategorySchema = new Schema({
    name: {
      type: String,
      enum: ["flatsharing", "renting", "sale"],
      required: true,
    },
    number: {
      type: Number,
      required: true,
    }
});

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;