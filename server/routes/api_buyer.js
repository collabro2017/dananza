const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const User = require('../models').User;
const Buyer_Profile = require('../models').Buyer_Profile;
const Adza_Profile = require('../models').Adza_Profile;
const Saved_Adza = require('../models').Saved_Adza;

// Get Buyer info of Current User
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var user_id = auth_user.id;

	Buyer_Profile
	  	.findOne({ where: {user_id: user_id} })
	  	.then((buyer_profile) => 
	  	{
	  		if(buyer_profile) res.status(200).send(buyer_profile);
	  		else res.status(304).send({ success: false, message: msg.noResult});
  		})
	  	.catch((error) => res.status(400).send({success: false, message: error }));
});

// create buyer profile first time
router.post('/', function(req, res) {
	var user_id = req.body.id;
  	Buyer_Profile
		.findOrCreate({
			where: { user_id: user_id }, 
			defaults: {
				user_id: user_id,
				location: null,
				profession: null,
				profile_description: null,
				has_seller_acct: false,
				business_name: null,
				job_type: null,
				signup_date: new Date()
		}})
		.then((created) => {
			if( created )
				res.status(201).send({success: false, message: msg.haveProfile})
			else
				res.status(400).send({success: false, message: msg.haveProfile})
		})
		.catch((error) => res.status(400).send({success: false, message: error }));
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
			profile_description: req.body.description,
			business_name: req.body.business_name,
			job_type: req.body.job_type,
			has_seller_acct: req.body.has_seller_acct
		})
		.then((profile)=>res.status(201).send({success: true, message: msg.updatedSuccess}))
		.catch((error) => res.status(400).send({success: false, message: error }));
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Get Saved Adza
router.get('/saved', passport.authenticate('jwt', {session: false}), function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;

	Buyer_Profile
		.findOne({ where: {user_id: user_id} })
		.then(function(profile) { 
			var buyer_id = profile.id;
			Saved_Adza.findAll( { where: {buyer_id: buyer_id}, include:[{model:Adza_Profile, as:'adza'}] } )
				.then( function( adzas ){
					if( adzas.length )
					{
						res.status(201).send({success: true, adzas:adzas});
					}
					else
						res.status(201).send({success: true, message: msg.noResult });
				})
		})
		// .catch((error) => res.status(400).send({success: false, message: error }));
});

// save new adza to saved_adza list
router.post('/saved', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;
	var adza_id = req.body.adza_id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Saved_Adza
		.findOrCreate({
			where: {buyer_id: buyer.id, adza_id: adza_id}, 
			defaults: {
				buyer_id: buyer.id,
				adza_id: adza_id,
				save_time: new Date()
		}})
		.spread( function(saved_adza, created){
			if( created )
				res.status(201).send({success: true, message: msg.addedSuccess})
			else
				res.status(400).send({success: false, message: msg.alreadyInList})
		})
		.catch((error) => res.status(400).send({success: false, message: error }));
});

// remove adza from saved list
router.delete('/saved/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
  	var saved_id = req.params.id;
  	Saved_Adza
	    .destroy( { where: { id: saved_id } } )
	    .then((blog) => res.status(200).send( {success: true, message: 'Deleted.'} ))
	    .catch((error) => { res.status(400).send(error); });
});

module.exports = router;