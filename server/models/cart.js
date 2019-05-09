'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    CampaignId: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT,
    BuyerProfileId: DataTypes.INTEGER,
    ListingIds: DataTypes.JSON,
  }, {});
 	
 	Cart.associate = function(models) {
    	// associations can be defined here
  	};

	Cart.getCartFromBuyerProfileId = function(UserId, callback){
    return this.findOne({ where: { UserId: UserId } })
        .then((cart) => { return callback(null, cart);})
        .catch((error) => { return callback(error, null);});
  	};
  	
  	return Cart;
};