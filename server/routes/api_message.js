'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const msg = require('../config/msg');

const Adza_Profile = require('../models').Adza_Profile;
const Buyer_Profile = require('../models').Buyer_Profile;
const Message = require('../models').Message;

router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
  	res.status(201).send({success: true, message: 'Router exists.'});
});

module.exports = router;