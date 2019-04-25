/api/signin
  method: POST
  Params: email, password
/api/signup
  Method: POST
  Params: email, password, password_confirm, 
/api/check_login
  Methos: POST
  Header: JWT token
  Params: nothing

/api/blog
  Method: GET
/api/blog
  Method: POST
  Params: title, content, featured_image
/api/blog/:id
  Method: GET
/api/blog/:id
  Method: PUT
  Params: active( true, false )
/api/blog/:id
  Method: delete



** from here request header has JWT Token

/api/user
  Method: GET
  Desc: get Self userinfo 
/api/user
  Method: PUT
  Params: business_name, f_name, l_name, profile_avatar
  Desc: Update account setting

/api/buyer
  Method: GET
  Desc: Get self buyer profile info
/api/buyer/:profile_id
  Method: GET
  Desc: Get specified buyer info
/api/buyer/
  Method: PUT
  Params: location, profession, profile_description
  Desc: Update buyer profile
/api/buyer/social
  --- Not designed
/api/buyer/saved
  Method: GET
  Desc: Get saved adza list
/api/buyer/saved/:id
  Method: DELETE
  Desc: remove save adza from list
/api/buyer/saved/
  Method: POST
  params: adza_id, listing_id
  Desc: save adza to list

/api/campaign
  Method: GET
  Desc: Get all campaigns
/api/campaign
  Method: POST
  Params: campaign_name, campaign_price, order_id
  Desc: Create new Campaign
/api/campaign/:id
  Method: PUT
  Params: campaign_status
  Desc: change campaign status
/api/campaign/:id
  Method: DELETE
  Desc: Delete campaign
/api/campaign/:id/listing
  Method: GET
  Desc: get campaign_list by ID
/api/campaign/:id/add_listing
  Method: POST
  Params: adza_id, listing_id
  Desc: insert listing to campaign  
/api/campaign/:id/remove/:lid
  Method: PUT
  Desc: remove listing from campaign


/api/adza
  Method: GET
  Desc: Get self adza profile info
/api/adza/:profile_id
  Method: GET
  Desc: Get specified adza info
/api/adza/
  Method: PUST
  Params: profile, photo, profile_description, image_gallery, audience_male_percent,
      audience_age_min, audience_age_max, audience_locations, audience_interests
  Desc: Update adza profile

/api/channel
  Method: GET
  Desc: get all channel lined to current adza
/api/channel
  Method: POST
  Params: media_type, follows, username, linked_channel
  Desc: add new channel to Adza ( need to be synch with Social API )
/api/channel/:id
  Method: DELETE
  Desc: delete channel from Adza info

/api/listing
  Method:GET
  Desc: get all linked listings associated with Channel
/api/listing
  Method: POST
  Params: channel_id, media_type, title, price, featured_photo, description
  Desc: add new listing depending on Channel
/api/listing/:id
  Method: GET
  Desc: get detailed info for listing
/api/listing/:id
  Method: PUT
  Desc: update listing info
/api/listing/:id
  Method: DELETE
  Desc: delete listing

/api/review
  Method: GET
  Params: Adza_id
  Desc: get reviews for seleted Adza
/api/review
  Method: POST
  Params: adza_id, buyer_id( logged in actor ), review_point, review_description, review_date

/api/message
  Method: get

/api/cart
  Method: GET
  Desc: get listings from cart
/api/cart/:id
  Method: PUT
  Params: listing_id
  Desc: Add new cart action
/api/cart/:id
  Method: DELETE
  Params: lising_id
  Desc: remove listing from cart

/api/order
  Method: GET
  Desc: get all order for Buyer
/api/order/:id
  Method: GET
  Desc: Get order detailed info
/api/order/:id
  Method: PUT
  Desc: Update order info by each action
/api/order/:id/history
  Method: GET
  Desc: get order history by order id