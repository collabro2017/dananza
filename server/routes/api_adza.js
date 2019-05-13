const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');
var multer = require('multer');
var fs = require('fs');

const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;
const Channel = require('../models').Channel;
const Listing = require('../models').Listing;

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    //uploaded files destination
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {

    const newFilename = file.originalname;
    cb(null, newFilename);
  }
});
var upload = multer({ storage: storage });

// get Adza profile by JWT
router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

  Adza_Profile
  	.findOne({ where: {UserId: UserId} })
  	.then((profile) => { 
  		if( profile ) res.status(200).send(profile) 
  		else res.status(200).send(msg.noResult);
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});

router.get('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
  var id = req.params.id;

  Adza_Profile
  	.findOne({ where: {id: id} })
  	.then((profile) => { 
  		if( profile ) res.status(200).send(profile) 
  		else res.status(200).send(msg.noResult);
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});


// create adza profile first time
router.post('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  var auth_user = req.user;
  var UserId = auth_user.id;

  Adza_Profile
	.findOrCreate({
		where: {UserId: UserId}, 
		defaults: {
			UserId: UserId,
			signup_date: new Date(),
			update_time: new Date()
	}})
	.then((profile, created) => {
		if( profile ){
			Buyer_Profile
			  	.findOne({ where: {UserId: UserId} })
			  	.then((buyer_profile) => { buyer_profile.update({ has_seller_acct: true }) })
			  	.catch((error) => res.status(400).send({success: false, message: error }));

			res.status(201).send(profile)
		}
		else
			res.status(400).send({success: false, message: msg.haveProfile})
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Update Adza profile
router.put('/', passport.authenticate('jwt', {session: false}), upload.array('image_gallery'), function(req, res, next) {
  var auth_user = req.user;
  var UserId = auth_user.id;
  var requestProfile = JSON.parse(req.body.sellerprofile);

  // process uploaded images
  var image_gallery = req.files;  	var arrImages = [];
  for (var i = 0; i < image_gallery.length; i++) {
  	var timeStamp = (new Date()).getTime();
  	var file_name = timeStamp+"-"+image_gallery[i].originalname;
  	var dest_path = "../src/assets/img/"+UserId+"/" + file_name;
  	var src_path = "./uploads/"+ image_gallery[i].originalname;

	if (!fs.existsSync( "../src/assets/img/"+UserId+"/" )){
	    fs.mkdirSync( "../src/assets/img/"+UserId+"/" );
	}
  	fs.rename(src_path, dest_path, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                res.status(500).send({success: false, message: msg.fileUploadError })
            }
            return;
        }
    });

  	arrImages.push( file_name );
  }
  requestProfile.image_gallery = arrImages;

  Adza_Profile
	.findOne({ where: {UserId: UserId} })
	.then(function(profile) {
		profile.update({
			...requestProfile,
			update_time: new Date()
		})
		.then((profile)=>res.status(201).send({success: true, message: msg.updatedSuccess }))
		.catch((error) => res.status(500).send(error));
	})
	.catch((error) => res.status(400).send({success: false, message: error }));
});

// Get All info of Adza
router.get('/:id/adzainfo', passport.authenticate('jwt', {session: false}), function(req, res) {
  var AdzaprofileId = req.params.id;

  Adza_Profile
  	.findOne({  where: {id: AdzaprofileId},
  			    include:[{model:Channel,
		          	include: [
		            {
		              model: Listing
        		    }]
        		}] })
  	.then((adzas) => { 
		if( adzas )
		{
			res.status(201).send({success: true, adzas:adzas});
		}
		else
			res.status(201).send({success: true, message: msg.noResult });
	})
  	.catch((error) => res.status(400).send({success: false, message: error }));
});

module.exports = router;