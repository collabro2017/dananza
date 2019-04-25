const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({message: 'Please pass email and password.'})
  } else {
    User
      .find({
        where: {
          email: req.body.email
        }
      })
      .then((user) => {
        if (!user) {
          User
            .create({
              email: req.body.email,
              password: req.body.password,
              f_name: req.body.firstName,
              l_name: req.body.lastName,
              business_name: req.body.businessName
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
              console.log(error);
              res.status(400).send(error);
            });
        }
        else{
            res.status(400).send({success: false, message: 'Email already exists.'})
        }
      })
      .catch((error) => res.status(400).send(error));    
  }
});

router.post('/signin', function(req, res) {
  User
      .find({
        where: {
          email: req.body.email
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Authentication failed. User not found.',
          });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
          if(isMatch && !err) {
            var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
            jwt.verify(token, 'nodeauthsecret', function(err, data){
              console.log(err, data);
            })
            res.json({success: true, user_info:user, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, message: 'Authentication failed. Wrong password.'});
          }
        })
      })
      .catch((error) => res.status(400).send(error));
});

module.exports = router;
