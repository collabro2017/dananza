Table users{
  id int [pk]
  email varchar
  business_name varchar
  password varchar
  customer_id varchar unique
  profile_id varchar unique
  f_name varchar
  l_name varchar
  profile_avatar varchar
}

Table buyer_profile{
  id int [pk]
  user_id int
  location varchar
  profession varchar
  has_seller_acct tinyint
  profile_description blob
  signup_date datetime
}

Table social_accounts{
  id int [pk]
  buyer_id int
  media_type varchar
  username varchar
  linked_account varchar
  website varchar  
}

Table saved_adza{
  id int [pk]
  buyer_id int
  adza_id int  
  listing_id int
  save_time date
}

Table campaigns{
  id int [pk]
  buyer_id int
  campaign_name varchar
  campaign_status varchar
  campaign_price float
  order_id int
}

Table campaign_listings{
  id int [pk]
  campaign_id int
  adza_id int
  listing_id int
  add_time datetime
}

Table adza_profile{
  id int [pk]
  user_id int
  profile_photo varchar
  profile_description blob
  review_point float
  signup_date datetime
  image_gallery json
  audience_male_percent float
  audience_age_min int
  audience_age_max int
  audience_locations varchar
  audience_interests varchar
  update_time datetime
}

Table sessions{
  id int [pk]
  buyer_id int
  adza_result_click tinyint
  adza_profile_id int
  adza_page_interaction tinyint
  page_action varchar
  page_addtocart tinyint
  action_choose_date tinyint
  ation_expandchannel tinyint
  actions_expandlisting tinyint
  action_galleryscroll tinyint
  action_profilesaved tinyint
  action_morereviews tinyint
}

Table reviews{
  id int [pk]
  adza_id int
  buyer_id int
  review_point float
  review_description varchar
  review_date datetime
}

Table channels{
  id int [pk]
  adza_id int
  media_type varchar
  follows int
  username varchar
  linked_channel varchar
  add_time datetime
  active tinyint
}

Table listings{
  id int [pk]
  adza_id int
  channel_id int
  media_type varchar
  title varchar
  price float
  featured_photo varchar
  description varchar
  insert_date datetime
}

Table messages{
  id int [pk]
  buyer_id int
  adza_id int
  message_text varchar
  message_time date
  is_new tinyint
}

Table carts{
  id int [pk]
  campaign_id int
  subtotal float
}

Table orders{
  id int [pk]
  buyer_id int
  campaign_id int
  order_status varchar
  order_date date
}

Table order_history{
  id int [pk]
  order_id int
  order_comment varchar
  order_status varchar
  update_time date  
}

Table blogs{
  id int [pk]
  title varchar
  content varchar
  post_time datetime
  featured_image varchar
  active tinyint
}

Table audience_keywords{
  id int [pk]
  keyword varchar
  active tinyint
}

Ref: users.id > buyer_profile.user_id
Ref: buyer_profile.id > social_accounts.buyer_id
Ref: saved_adza.buyer_id > buyer_profile.id
Ref: saved_adza.adza_id > adza_profile.id
Ref: saved_adza.listing_id > listings.id
Ref: campaigns.buyer_id > buyer_profile.id
Ref: campaign_listings.campaign_id > campaigns.id
Ref: campaign_listings.adza_id > adza_profile.id
Ref: campaign_listings.listing_id > listings.id
Ref: users.id > adza_profile.user_id
Ref: reviews.adza_id > adza_profile.id
Ref: reviews.buyer_id > buyer_profile.id
Ref: channels.adza_id > adza_profile.id
Ref: listings.adza_id > adza_profile.id
Ref: listings.channel_id > channels.id
Ref: messages.buyer_id > buyer_profile.id
Ref: messages.adza_id > adza_profile.id
Ref: carts.campaign_id > campaigns.id
Ref: orders.campaign_id > campaigns.id
Ref: sessions.buyer_id > buyer_profile.id
Ref: sessions.adza_profile_id > adza_profile.id

