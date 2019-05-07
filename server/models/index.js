'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user.js')(sequelize, Sequelize); 
db.Adza_Profile = require('./adza_profile.js')(sequelize, Sequelize); 
db.Buyer_Profile = require('./buyer_profile.js')(sequelize, Sequelize); 
db.Saved_Adza = require('./saved_adza.js')(sequelize, Sequelize); 
db.Campaign = require('./campaign.js')(sequelize, Sequelize); 
db.Campaign_Listing = require('./campaign_listing.js')(sequelize, Sequelize); 
db.Channel = require('./channel.js')(sequelize, Sequelize); 
db.Listing = require('./listing.js')(sequelize, Sequelize); 
db.Order = require('./order.js')(sequelize, Sequelize); 
db.Order_History = require('./order_history.js')(sequelize, Sequelize); 
db.Review = require('./review.js')(sequelize, Sequelize); 
db.Cart = require('./cart.js')(sequelize, Sequelize); 

db.Adza_Profile.hasMany(db.Saved_Adza)
db.Saved_Adza.belongsTo(db.Adza_Profile)

db.User.hasOne(db.Adza_Profile)
db.Adza_Profile.belongsTo(db.User)  

module.exports = db;
