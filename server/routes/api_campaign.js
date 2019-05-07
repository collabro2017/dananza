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
	var UserId = auth_user.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );
	Campaign
		.findAll({where:{BuyerProfileId: buyer.id}})
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
	var UserId = auth_user.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	var name = req.body.campaign_name;

	Campaign
		.findOrCreate({
			where:{BuyerProfileId: buyer.id, campaign_status:"open"}, 
			defaults: { BuyerProfileId: buyer.id, campaign_name: name, campaign_status: "open" }
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
	var UserId = auth_user.id;
	var CampaignId = req.params.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Campaign
		.findByPk(CampaignId)
		.then(function(campaign){
			if( campaign )
			{
				campaign.update({
					campaign_name: req.body.campaign_name,
					campaign_status: req.body.campaign_status,
					campaign_price: req.body.campaign_price,
					OrderId: req.body.OrderId
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
	var CampaignId = req.params.id;
	var auth_user = req.user;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	Campaign
	    .destroy( { where: { id: CampaignId, BuyerProfileId: buyer.id } } )
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
	var CampaignId = req.params.id;
	var auth_user = req.user;

	Campaign_Listing
		.findAll({where:{CampaignId: CampaignId}})
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
	var CampaignId = req.params.id;
	var ListingId = req.body.ListingId;

	// TODO : find AdzaID from listing ID
	Campaign_Listing
		.findOrCreate({
			where:{CampaignId: CampaignId, ListingId: ListingId }, 
			defaults: { CampaignId: CampaignId, ListingId: ListingId, add_time: new Date() }
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
	var CampaignId = req.params.id;
	var ListingId = req.params.lid;

	Campaign_Listing
	    .destroy( { where: { ListingId: ListingId, CampaignId: CampaignId } } )
	    .then((listing) => {
	    	if( listing)
	    		res.status(200).send({success: true, message: msg.deletedSuccess})
	    	else
	    		res.status(403).send({success: false, message: msg.noOwner})
	    })
	    .catch((error) => { res.status(400).send({success: false, message: error }); });
});
module.exports = router;