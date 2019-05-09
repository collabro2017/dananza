'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');
const Sequelize = require('sequelize');

const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;
const Message = require('../models').Message;
const Message_Contact = require('../models').Message_Contact;

router.get('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
  	var user_id = auth_user.id;
  	var user_type = req.body.type;
  	var arrRes = [];
  	var contacts = [];

  	// Get Contact List with last message
  	if( user_type == 'buyer' ){
		var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
			if( !err )
				return profile;
			else
				return res.status(400).send( {success: false, message: err });
		} );
		contacts = await Message_Contact.findAll({ where: { BuyerProfileId: buyer.id } })

		// TODO get message list for each conversation
		if( contacts.length ){
			var messages = contacts.map( function(contact){
				const result = Message
					.findAll({ where: { buyer_user: buyer.id } })
					.then((messages) => { return messages; })
					.catch((error) => res.status(400).send({success: false, message: error }))  

				console.log( result ); 
				return Sequelize.Promise.all(result); 
			})

			res.status(201).send({success: true, result: [{'contact': contacts, 'messages': messages }] });
		}
		else
			res.status(201).send({success: true, message: msg.noResult});
	}
	else
	{
		var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
			if( !err )
				return profile;
			else
				return res.status(400).send( {success: false, message: err });
		} );

		contacts = await Message_Contact.findAll({ where: { AdzaProfileId: adza.id } })
	}


});

router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res) {
	var auth_user = req.user;
	var user_id = auth_user.id;
	var to_user = req.body.to;
	var user_type = req.body.type;
	var message_text = req.body.message;
	var contact;

	if( user_type == 'buyer' ){
		var buyer = await Buyer_Profile.getBuyerFromUserID( auth_user.id, function(err, profile ){
			if( !err )
				return profile;
			else
				return res.status(400).send( {success: false, message: err });
		} );
		contact = await Message_Contact
			.findOrCreate({ where: { BuyerProfileId: buyer.id, AdzaProfileId: to_user }, 
				defaults: {
					AdzaProfileId: to_user,
					BuyerProfileId: buyer.id,
					connect_time: new Date()
				} })
			.then(function( contact, created){
				if( contact )
					return contact;
				else
					return res.status(400).send( {success: false, message: msg.creatingError });
			})
	}
	else
	{
		var adza = await Adza_Profile.getAdzaFromUserID( auth_user.id, function(err, profile ){
			if( !err )
				return profile;
			else
				return res.status(400).send( {success: false, message: err });
		} );

		contact = await Message_Contact
			.findOrCreate({ where: { AdzaProfileId: adza.id, BuyerProfileId: to_user }, 
				defaults: {
					AdzaProfileId: adza.id,
					BuyerProfileId: to_user,
					connect_time: new Date()
				} })
			.then(function( contact, created){
				if( contact )
					return contact;
				else
					return res.status(400).send( {success: false, message: msg.creatingError });
			})

	}

	// Post New Message
	var buyer_user = user_id;
	if(  user_type != 'buyer' )
		buyer_user = to_user;

	Message
		.create({
	        user_from_id: user_id,
	        user_to_id: to_user,
	        message_text: message_text,
	        message_time: new Date(),
	        buyer_user: buyer_user,
	        is_new: true
	      })
	      .then((blog) => res.status(201).send( {success: true, message: msg.sentSuccess } ))
	      .catch((error) => res.status(400).send({success: false, message: msg.creatingError }));
});

module.exports = router;