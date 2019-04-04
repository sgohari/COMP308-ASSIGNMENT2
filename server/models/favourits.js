let mongoose = require('mongoose');

//create a model class
let favouriteSchema = mongoose.Schema({
    FirstName: String,
    LastName:String,
    FavouriteVehicle:String,
    FavouriteSport: String
    },

    {
        collection:"fv"
    });


    
    module.exports=mongoose.model('favourite', favouriteSchema);