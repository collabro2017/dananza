const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const Buyer_Profile = require('../models').Buyer_Profile;
const Cart = require('../models').Cart;
const Campaign = require('../models').Campaign;
const Campaign_Listing = require('../models').Campaign_Listing;

// Get All listings in Cart
router.get('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;
	
	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	// get current Campaign
	var opened_campaign = await Campaign
		.findOne({where:{buyer_id: buyer.id, campaign_status:"open"}})
		.then((campaign) => { if( campaign ) return campaign; else return null })
		.catch((error) => res.status(500).send({success: false, message: error }));

	if( !opened_campaign ){
		Campaign
			.findOrCreate({
				where:{ buyer_id: buyer.id, campaign_status: "open" }, 
				defaults: { buyer_id: buyer.id, campaign_name: "Campaign1", campaign_status: "open" }
			})
			.spread(function(campaign, created){
				if( created )
					opened_campaign = campaign;
				else
					return res.status(403).send({success: false, message: msg.alreadyExists });
			})
			.catch((error) => res.status(500).send({success: false, message: error }))
		// return res.status(500).send({success: false, message: msg.noCampaign });
	}

	// Get current Cart info
	var current_cart = await Cart
		.findOne({where:{campaign_id: opened_campaign.id}})
		.then((cart) => { if( cart ) return cart; else return null; })
		.catch((error) => res.status(500).send({success: false, message: error }));

	if( !current_cart ){
		Cart
			.findOrCreate({
				where:{campaign_id: opened_campaign.id }, 
				defaults: { campaign_id: opened_campaign.id, subtotal: 0 }
			})
			.spread(function(cart, created){
				if( created )
					current_cart = cart;
				else
					return res.status(403).send({success: false, message: msg.alreadyExists });
			})
			.catch((error) => res.status(500).send({success: false, message: error }))

	}

	// Get associated Listings
	var listings = await Campaign_Listing
		.findAll({where:{campaign_id: opened_campaign.id}})
		.then(function( listings ) {
			if( listings.length )
				return listings;
			else
				return [];
		})
		.catch((error) => res.status(500).send({success: false, message: error }))

	return res.status(201).send({success: true, cart:current_cart, listings: listings })
});

// Clear current cart
router.delete('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	});

	// get current Campaign
	var opened_campaign = await Campaign
		.findOne({where:{buyer_id: buyer.id, campaign_status:"open"}})
		.then((campaign) => { if( campaign ) return campaign; else return null })
		.catch((error) => res.status(500).send({success: false, message: error }));

	opened_campaign
		.update({campaign_status: 'closed'});

	var current_cart = await Cart
		.findOne({where:{campaign_id: opened_campaign.id}})
		.then((cart) => { if( cart ) return cart; else return null; })
		.catch((error) => res.status(500).send({success: false, message: error }));

	current_cart.destroy( { where: { id: current_cart.id} } )
	    .then((cart) => {
	    	if( cart)
	    		res.status(200).send({success: true, message: msg.deletedSuccess})
	    	else
	    		res.status(403).send({success: false, message: msg.noOwner})
	    })
});

module.exports = router;