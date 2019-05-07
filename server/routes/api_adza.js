const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;

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

router.get('/:profile_id', passport.authenticate('jwt', {session: false}), function(req, res) {
  var profile_id = req.params.profile_id;

  Adza_Profile
  	.findOne({ where: {profile_id: profile_id} })
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
	.then(function(profile, created){
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

  Adza_Profile
	.findOne({ where: {UserId: UserId} })
	.then(function(profile) {
		profile.update({
			...req.body.sellerprofile,
			update_time: new Date()
		})
		.then((profile)=>res.status(201).send({success: true, message: msg.updatedSuccess}))
		.catch((error) => res.status(500).send(error));
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});



module.exports = router;