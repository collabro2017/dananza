const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;
const Buyer_Profile = require('../models').Buyer_Profile;
const Saved_Adza = require('../models').Saved_Adza;

// Get Buyer info of Current User
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var user_id = auth_user.id;

  Buyer_Profile
  	.findOne({ where: {user_id: user_id} })
  	.then((buyer_profile) => res.status(200).send(buyer_profile))
  	.catch((error) => res.status(400).send(error));
});

// create buyer profile first time
router.post('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var user_id = auth_user.id;

  Buyer_Profile
	.findOrCreate({
		where: {user_id: user_id}, 
		defaults: {
			user_id: user_id,
			location: req.body.location,
			profession: req.body.profession,
			profile_description: req.body.profile_description,
			has_seller_acct: false,
			signup_date: new Date()
	}})
	.then((buyer_profile, created) => {
		if( created )
			res.status(201).send(buyer_profile)
		else
			res.status(400).send({success: false, message: 'Already has buyer profile.'})
	})
	.catch((error) => res.status(400).send(error));
});

// Update Buyer profile
router.put('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var user_id = auth_user.id;

  Buyer_Profile
	.findOne({ where: {user_id: user_id} })
	.then(function(profile) {
		profile.update({
			location: req.body.location,
			profession: req.body.profession,
			profile_description: req.body.profile_description,
			has_seller_acct: req.body.has_seller_acct
		})
		.then((profile)=>res.status(201).send({success: true, message: 'Updated.'}))
		.catch((error) => res.status(500).send(error));
	})
	.catch((error) => res.status(400).send(error));
});

// Get Saved Adza
router.get('/saved', passport.authenticate('jwt', {session: false}), function(req, res) {
  	res.status(201).send({success: true, message: 'Router exists.'});
});

// save new adza to saved_adza list
router.post('/saved', passport.authenticate('jwt', {session: false}), function(req, res) {
  	res.status(201).send({success: true, message: 'Router exists.'});
});

// remove adza from saved list
router.post('/saved', passport.authenticate('jwt', {session: false}), function(req, res) {
  	res.status(201).send({success: true, message: 'Router exists.'});
});

module.exports = router;