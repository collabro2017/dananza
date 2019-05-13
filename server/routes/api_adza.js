const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;
const Channel = require('../models').Channel;
const Listing = require('../models').Listing;

// get Adza profile by JWT
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

  Adza_Profile
  	.findOne({ where: {UserId: UserId} })
  	.then((profile) => { 
  		if( profile ) res.status(200).send(profile) 
  		else res.status(200).send(msg.noResult);
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});

router.get('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
  var id = req.params.id;

  Adza_Profile
  	.findOne({ where: {id: id} })
  	.then((profile) => { 
  		if( profile ) res.status(200).send(profile) 
  		else res.status(200).send(msg.noResult);
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});


// create adza profile first time
router.post('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

  Adza_Profile
	.findOrCreate({
		where: {UserId: UserId}, 
		defaults: {
			UserId: UserId,
			signup_date: new Date(),
			update_time: new Date()
	}})
	.then((profile, created) => {
		if( profile ){
			Buyer_Profile
			  	.findOne({ where: {UserId: UserId} })
			  	.then((buyer_profile) => { buyer_profile.update({ has_seller_acct: true }) })
			  	.catch((error) => res.status(400).send({success: false, message: error }));

			res.status(201).send(profile)
		}
		else
			res.status(400).send({success: false, message: msg.haveProfile})
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Update Adza profile
router.put('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;
  var requestProfile = JSON.parse( req.body.sellerprofile );
  requestProfile.image_gallery = []

  Adza_Profile
	.findOne({ where: {UserId: UserId} })
	.then(function(profile) {
		profile.update({
			...requestProfile,
			update_time: new Date()
		})
		.then((profile)=>res.status(201).send({success: true, message: msg.updatedSuccess}))
		.catch((error) => res.status(500).send(error));
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Get All info of Adza
router.get('/:id/adzainfo', passport.authenticate('jwt', {session: false}), function(req, res) {
  var AdzaprofileId = req.params.id;

  Adza_Profile
  	.findOne({  where: {id: AdzaprofileId},
  			    include:[{model:Channel,
		          	include: [
		            {
		              model: Listing
        		    }]
        		}] })
  	.then((adzas) => { 
		if( adzas )
		{
			res.status(201).send({success: true, adzas:adzas});
		}
		else
			res.status(201).send({success: true, message: msg.noResult });
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});

module.exports = router;