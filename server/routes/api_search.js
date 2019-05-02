const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const Adza_Profile = require('../models').Adza_Profile;

router.get('/', function(req, res) {
	var q_str = req.body.query;	
	var media_types = req.body.media_types;	
	var interests = req.body.interests;	
	var locations = req.body.locations;	
	var min_reach = req.body.min_reach;	
	var gender = req.body.gender;	
	var age_min = req.body.age_min;	
	var age_max = req.body.age_max;	
	var price_min = req.body.price_min;	
	var price_max = req.body.price_max;	
	var review_point = req.body.review_point;	
	var launch_date = req.body.launch_date;

	var whereCondition = null;

	Adza_Profile
		.findAll({ where:{} })
		.then( function( adzas ){
			if( adzas.length )
			{
				res.status(201).send({success: true, adzas:adzas});
			}
			else
				res.status(201).send({success: true, message: msg.noResult });
		})

});

module.exports = router;