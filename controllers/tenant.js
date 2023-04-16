const Property = require('../models/property');
 
// functions

async function getAllProperties (req, res) {
    try {
        const result = await Property.find({});
        res.send(result);
    }

    catch (err) {
        console.log(err)
    }
};

async function getProperty (req, res) {
     let property = null;
     const searchBy = req.query.searchBy;
     const value = req.query.value;

    try {
        switch(searchBy) {
            case '_id':
                property = await Property.findById(value);
                break;
            case 'type':
                property = await Property.find({type: value});
            break;
            case 'id_category':
                property = await Property.find({id_category: value});
                break; 
            case 'rooms':
                property = await Property.find({rooms: value});
                break; 
            case 'address':
                property = await Property.find({address: value});
                break;
            case 'price':
               property = await Property.find({price: value});
                break;
            default:
                return res.status(400).json({message: 'Invalid searchBy parameter'});     
        }
        if (property) {
            res.status(200).json(property)
        } else {
            res.status(404).json({message: 'No property found!!!'})
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: 'Internal server error'})
    }
};




module.exports = {
    getAllProperties,
    getProperty
};