const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');
var fs = require('fs');

const User = require('../models').User;
const Buyer_Profile = require('../models').Buyer_Profile;
const Adza_Profile = require('../models').Adza_Profile;
const Saved_Adza = require('../models').Saved_Adza;

// Get Buyer info of Current User
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

	Buyer_Profile
	  	.findOne({ where: {UserId: UserId} })
	  	.then((buyer_profile) => 
	  	{
	  		if(buyer_profile) res.status(200).send(buyer_profile);
	  		else res.status(304).send({ success: false, message: msg.noResult});
  		})
	  	.catch((error) => res.status(400).send({success: false, message: error }));
});

// create buyer profile first time
router.post('/', function(req, res) {
	var UserId = req.body.id;
  	Buyer_Profile
		.findOrCreate({
			where: { UserId: UserId }, 
			defaults: {
				UserId: UserId,
				profile_description: null,
				has_seller_acct: false,
				job_type: null,
				locations: [],
				linkedAccounts: [],
				accounts: [],
				signup_date: new Date(),
				update_time: new Date()
		}})
		.then((created) => {
			if( created )
				res.status(201).send({success: false, message: msg.haveProfile})
			else
				res.status(304).send({success: false, message: msg.haveProfile})
		})
		.catch((error) => res.status(400).send({success: false, message: error }));
});

// Update Buyer profile
router.put('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

  Buyer_Profile
	.findOne({ where: {UserId: UserId} })
	.then(function(profile) {

		profile_photo = profile.profile_photo;

		if( req.body.preview != null ){
			// TODO : need to make config for avatar base dir
			base_path = "../src/assets/avatar/";
			file_name = "profile_photo" + profile.id + ".png";
			upload_path = base_path + file_name;

			var data = req.body.preview.replace(/^data:image\/\w+;base64,/, "");
			fs.writeFile( upload_path , data, {encoding: 'base64'}, function(err) {
			    if (err) return res.status(400).send({success: false, message: err });
			});
			profile_photo = file_name;
		}

		profile.update({
			locations: req.body.locations,
			profile_description: req.body.profile_description,
			job_type: req.body.job_type,
			has_seller_acct: req.body.has_seller_acct,
			linkedAccounts: req.body.linkedAccounts,
			accounts: req.body.accounts,
			profile_photo: profile_photo,
			update_time: new Date()
		})
		.then((profile)=>res.status(201).send({success: true, message: msg.updatedSuccess}))
		.catch((error) => res.status(400).send({success: false, message: error }));
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Get Saved Adza
router.get('/saved', passport.authenticate('jwt', {session: false}), function(req, res) {
	var auth_user = req.user;
	var UserId = auth_user.id;

	Buyer_Profile
		.findOne({ where: {UserId: UserId} })
		.then(function(profile) { 
			var BuyerProfileId = profile.id;
			Saved_Adza.findAll({ 
				where: {BuyerProfileId: BuyerProfileId}, 
				include:[{model:Adza_Profile,
		          	include: [
		            {
		              model: User
        		    }]
        		}]
              	})
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
	var UserId = auth_user.id;
	var AdzaProfileId = req.body.AdzaProfileId;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Saved_Adza
		.findOrCreate({
			where: {BuyerProfileId: buyer.id, AdzaProfileId: AdzaProfileId}, 
			defaults: {
				BuyerProfileId: buyer.id,
				AdzaProfileId: AdzaProfileId,
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