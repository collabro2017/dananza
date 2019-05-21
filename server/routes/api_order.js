const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const msg = require('../config/msg');
require('../config/passport')(passport);


const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;
const Order = require('../models').Order;
const Order_History = require('../models').Order_History;
const Campaign_Listing = require('../models').Campaign_Listing;
const Campaign = require('../models').Campaign;
const User = require('../models').User;
const Listing = require('../models').Listing;
const Channel = require('../models').Channel;

router.get('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	} );

	if (adza == null) {
		return res.status(201).send({success: true, message: msg.noResult });
	}
	
	Campaign_Listing
		.findAll({ 
				where: {AdzaProfileId: adza.id},
				include: [
					{
						model:Order,
						include:[{
							model: Buyer_Profile,
							include: [{
								model: User
							}]
						}]
					},
					{
						model:Listing,
						include:[
						{
							model: Channel,
							attributes:["username","follows"]
						}]
					},
					{
						model:Campaign,
						attributes:["campaign_name"]
					},
					{
						model:Adza_Profile,
					}
				],
				order: [['id',"DESC"]] } )
		.then(function( order ){
			if( order )
			{
				return res.status(201).send({success: true, data: order});
			}
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))

});


router.get('/:orderId', passport.authenticate('jwt', {session: false}), function(req, res) {
	var orderId = req.params.orderId;
	
	Order
		.findOne({ 
				where: {id: orderId},
				include: [
					{
						model:Order_History,
					},
					{
						model:Buyer_Profile,
						include:[{
							model:User,
							attributes:['business_name']
						}]
					},
					{
						model:Campaign_Listing,
						include:[
							{
								model: Listing,
								attributes:['title']
							},
							{
								model: Adza_Profile,
								include:[{
									model:User,
									attributes:['business_name']
								}]
							},
							{
								model: Campaign,
								attributes:['campaign_name']
							}
						]
					}
				] } )
		.then(function( order ){
			if( order )
			{
				return res.status(201).send({success: true, order});
			}
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

router.get('/:orderId/status', passport.authenticate('jwt', {session: false}), function(req, res) {
	var orderId = req.params.orderId;

	Order_History
		.findAll({ 
				where: {OrderId: orderId},
				order: [['id', 'DESC']]
				} )
		.then(function( order ){
			if( order )
			{
				var flags = {};
				var data = [];
				for (item of order)
				{
					if (item.order_status == "relaunch_pending" && flags.adlauch == undefined)
						flags.adlauch = true;
					else if (item.order_status == "accept" && item.order_type != "ratingsellergiven" && item.order_type != "ratingbuyergiven")
					{
						if (flags[item.order_type] == undefined) {
							flags[item.order_type] = true;
							data.unshift(item);
						}
					}
				}
				return res.status(201).send({success: true, data});
			}
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))
});

router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res) {

	var auth_user = req.user;
	var UserId = auth_user.id;
	var cart_listings = req.body.listings;

	var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
		if( !err )
			return profile;
		else
			return res.status(400).send( {success: false, message: err });
	});

	var cur_order = await Order
		.create({
			BuyerProfileId: buyer.id,
			CampaignListingId: cart_listings.id,
			order_date: cart_listings.add_time,
			order_status: 'uploaded'
		})
		.then((order) => { res.status(201).send(order); })
		.catch((error) => res.status(400).send({ success: false, message: error }));
});

router.post('/:OrderId', passport.authenticate('jwt', {session: false}), function(req, res) {
	var order_status = req.body.order_status;
	var order_type = req.body.order_type;
	var order_comment = req.body.order_comment;
	var order_attachment = req.body.order_attachment;
	var OrderId = req.body.OrderId;
	var tmp = new Date();
	tmp = new Date(tmp.getTime()+1000);
	
	Order_History
		.create({
			OrderId,
			order_status,
			order_type,
			order_comment,
			order_attachment,
			update_time: tmp
		})
		.then((order) => {
			if (order_status == "accept" && order_type == "buyerapprove") {
				Order
					.findOne({ where: {id: OrderId} } )
					.then(function(order){
						if (order) {
							order.order_status = "finished";
							order.update({...order});
							return res.status(201).send({success: true, message: msg.updatedSuccess});
						}
						else
							return res.status(201).send({success: true, message: msg.noResult });
					})
			}
			else{
				return res.status(201).send({success: true, message: msg.noResult });
			}
		})
		.catch((error) => res.status(400).send({ success: false, message: error }));

});

router.put('/', passport.authenticate('jwt', {session: false}), function(req, res) {
	var order_up = req.body.order;
	
	Order_History
		.findOne({ where: {id: order_up.id} } )
		.then(function( order ){
			if( order )
			{
				order_up.update_time = new Date();
				order.update({...order_up});
				return res.status(201).send({success: true, message: msg.updatedSuccess});
			}
			else
				return res.status(201).send({success: true, message: msg.noResult });
		})
		.catch((error) => res.status(500).send({success: false, message: error }))

});

module.exports = router;