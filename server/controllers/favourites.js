let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

//reference to the db schema
let myFavourit = require('../models/favourits');

module.exports.displayFavouriteList = (req, res, next)=>{
    myFavourit.find((err, favouriteList)=>{

        if(err){
            return console.error(err);
        }
        else{
          res.json({success: true, msg: 'Favourite List Displayed Successfully', favouriteList: favouriteList, user: req.user});
        }
    });
}
module.exports.displayAddFavourits = (req, res, next)=>{
   
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}
//updated controller
module.exports.processAddFavouritList =(req, res, next)=>{

    //console.log(req.body)

    let newFavourites = myFavourit({
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "FavouriteVehicle": req.body.favouriteVehicle,
        "FavouriteSport": req.body.favouriteSport

    });
    
    myFavourit.create(newFavourites, (err, myFavourit)=>{

        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh favorite list
            //res.redirect('/favourite-List');
            res.json({success: true, msg: 'Successfully Added New Favourite List'});

        }
    });
}

module.exports.displayEditPage =(req, res, next)=>{

    let id=req.params.id;
    //console.log(id);
    
    myFavourit.findById(id,(err, fvObject)=>{

        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.json({success: true, msg: 'Successfully Edited Contact',favouriteList: fvObject});
        }
    });

}

module.exports.proccessEditPage=(req, res, next)=>{

    let id=req.params.id;
    //use the above id to update all property. or all

    let updateDB = myFavourit({

        "_id": id,
        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "FavouriteVehicle": req.body.favouriteVehicle,
        "FavouriteSport": req.body.favouriteSport
    });

    myFavourit.update({ _id:id }, updateDB, (err)=>{

        if(err){
            console.log(err);
            res.end(err);
        }else{
        
            res.json({success: true, msg: 'Successfully Edited Contact',favouriteList: updateDB});

        }
    })
}

module.exports.performDelete = (req, res, next)=>{
    
    //consol
    let id = req.params.id;
    console.log("id: " + id);
    myFavourit.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
           
            res.json({success: true, msg: 'Successfully Deleted'});

        }
    });
}