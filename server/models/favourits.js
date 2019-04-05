let mongoose = require('mongoose');

//create a model class
let favouriteSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    favouriteVehicle:String,
    favouriteSport: String
    },

    {
        collection:"fv"
    });


    
    module.exports=mongoose.model('favourites', favouriteSchema);