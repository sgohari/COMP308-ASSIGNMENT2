let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

//for using mongo
let mongoose = require('mongoose');

//reference to passports
let passport = require('passport');
let favouriteController=require('../controllers/favourites');

function requiredAuth(req, res, next){
    //checking if the user is logged in
    //console.log(req.user.username);
    if(!req.isAuthenticated()){
      return res.redirect('/login');
    }
 
    next();
  }

router.get('/', passport.authenticate('jwt',{session:false}),favouriteController.displayFavouriteList );

// GET route for the add page
router.get('/add', passport.authenticate('jwt',{session:false}), favouriteController.displayAddFavourits);

/*Post Route processing the add*/
router.post('/add',passport.authenticate('jwt',{session:false}), favouriteController.processAddFavouritList);

/*GET request display EDIT page */
router.get('/edit/:id',passport.authenticate('jwt',{session:false}), favouriteController.displayEditPage);

/* POST request to update the DB with data from Edit page */
router.post('/edit/:id',passport.authenticate('jwt',{session:false}), favouriteController.proccessEditPage);

/**GET request to perform the delete action */
router.get('/delete/:id',passport.authenticate('jwt',{session:false}), favouriteController.performDelete);

module.exports = router;