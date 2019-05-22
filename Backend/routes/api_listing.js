'use strict';

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

// TODO: think this APi is required
router.get('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Listing
		.findAll({ where: {AdzaProfileId: adza.id} } )
		.then(function( Listing ){
			if( Listing.length )
			{
				return res.status(201).send({success: true, adlist:Listing});
			}
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

// get listing info
router.get('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
	var listing_id = req.params.id;
	Listing
	    .findByPk( listing_id )
	    .then((listing) => res.status(200).send(listing))
	    .catch((error) => res.status(500).send({success: false, message: error }));
});

// Create New Listing to Channel
router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;

	var ChannelId 		= req.body.ChannelId;
	var media_type 		= req.body.media_type;
	var title 			= req.body.title;
	var price 			= req.body.price;
	var featured_photo 	= req.body.featured_photo;
	var description 	= req.body.description;

	// Get current Adza Info
	var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Listing
		.create({
			AdzaProfileId: 		adza.id,
			ChannelId: 		ChannelId,
			media_type: 	media_type,
			title: 			title,
			price: 			price,
			featured_photo: featured_photo,
			description: 	description,
			insert_date: new Date()
		})
		.then((listing) => res.status(201).send({ success: true, listing: listing }))
		.catch((error) => res.status(400).send({ success: false, message: error }));
});

// Update Listing Info
router.put('/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var listing_id = req.params.id;
	var auth_user = req.user;

	var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	var ChannelId		= req.body.ChannelId;
	var media_type		= req.body.media_type;
	var title 			= req.body.title;
	var price 			= req.body.price;
	var featured_photo 	= req.body.featured_photo;
	var description 	= req.body.description;

	Listing
		.findByPk( listing_id )
		.then(function(listing) {
			if( listing.AdzaProfileId == adza.id ){
				listing.update({
					ChannelId:		ChannelId,
					media_type:		media_type,
					title: 			title,
					price: 			price,
					featured_photo: featured_photo,
					description: 	description,
				});
				return res.status(201).send({success: true, message: msg.updatedSuccess});
			}
			else
				return res.status(403).send({success: false, message: msg.noOwner})
		})
		.catch((error) => { res.status(400).send({success: false, message: error }); });
});

// Delete Channel
router.delete('/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var listing_id = req.params.id;
	var auth_user = req.user;

	var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Listing
	    .destroy( { where: { id: listing_id, AdzaProfileId: adza.id } } )
	    .then((listing) => {
	    	if( listing)
	    		res.status(200).send({success: true, message: msg.deletedSuccess})
	    	else
	    		res.status(403).send({success: false, message: msg.noOwner})
	    })
	    .catch((error) => { res.status(400).send({success: false, message: error }); });
});

module.exports = router;