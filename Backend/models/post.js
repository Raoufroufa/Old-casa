const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema ({
    id_user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
    });



 module.exports = mongoose.model("search", searchSchema);