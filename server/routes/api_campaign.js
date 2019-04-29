const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const Buyer_Profile = require('../models').Buyer_Profile;
const Campaign = require('../models').Campaign;
const Campaign_Listing = require('../models').Campaign_Listing;

// Get all campaigns
router.get('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );
	Campaign
		.findAll({where:{buyer_id: buyer.id}})
		.then(function( campaigns ) {
			if( campaigns.length )
				return res.status(201).send({success: true, campaigns:campaigns});
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

// Create new Campaign
router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	var name = req.body.campaign_name;

	Campaign
		.findOrCreate({
			where:{buyer_id: buyer.id, campaign_status:"open"}, 
			defaults: { buyer_id: buyer.id, campaign_name: name, campaign_status: "open" }
		})
		.spread(function(campaign, created){
			if( created )
				return res.status(201).send({success: true, message: msg.createdSuccess });
			else
				return res.status(403).send({success: false, message: msg.campaignExist });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
}); 

// Update Campaign Info
router.put('/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;
	var campaign_id = req.params.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Campaign
		.findByPk(campaign_id)
		.then(function(campaign){
			if( campaign )
			{
				campaign.update({
					campaign_name: req.body.campaign_name,
					campaign_status: req.body.campaign_status,
					campaign_price: req.body.campaign_price,
					order_id: req.body.order_id
				})
				.then((campaign)=>res.status(201).send({success: true, message: msg.updatedSuccess}))
				.catch((error) => res.status(500).send(error));
			}
			else
				return res.status(500).send({success: false, message: msg.noResult })
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
}); 

// Delete Campaign
router.delete('/:id', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var campaign_id = req.params.id;
	var auth_user = req.user;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Campaign
	    .destroy( { where: { id: campaign_id, buyer_id: buyer.id } } )
	    .then((campaign) => {
	    	if( campaign)
	    		res.status(200).send({success: true, message: msg.deletedSuccess})
	    	else
	    		res.status(403).send({success: false, message: msg.noOwner})
	    })
	    .catch((error) => { res.status(400).send({success: false, message: error }); });
});
// get listings by campaign ID
router.get('/:id/listing', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var campaign_id = req.params.id;
	var auth_user = req.user;

	Campaign_Listing
		.findAll({where:{campaign_id: campaign_id}})
		.then(function( listings ) {
			if( listings.length )
				return res.status(201).send({success: true, listings:listings});
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

// add Listing to Campaign
router.post('/:id/listing', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var campaign_id = req.params.id;
	var listing_id = req.body.listing_id;

	// TODO : find AdzaID from listing ID
	Campaign_Listing
		.findOrCreate({
			where:{campaign_id: campaign_id, listing_id: listing_id }, 
			defaults: { campaign_id: campaign_id, listing_id: listing_id, add_time: new Date() }
		})
		.spread(function(listing, created){
			if( created )
				return res.status(201).send({success: true, message: msg.addedSuccess });
			else
				return res.status(403).send({success: false, message: msg.alreadyExists });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

// Delete listing from Campaign
router.delete('/:id/remove/:lid', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var campaign_id = req.params.id;
	var listing_id = req.params.lid;

	Campaign_Listing
	    .destroy( { where: { listing_id: listing_id, campaign_id: campaign_id } } )
	    .then((listing) => {
	    	if( listing)
	    		res.status(200).send({success: true, message: msg.deletedSuccess})
	    	else
	    		res.status(403).send({success: false, message: msg.noOwner})
	    })
	    .catch((error) => { res.status(400).send({success: false, message: error }); });
});
module.exports = router;