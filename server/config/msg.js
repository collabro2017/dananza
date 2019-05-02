const msg = {
    // Error messages
    'emailRequiredField': "'email' is a required field.",
    'emailIsEmail': "This is not a valid email address.",
    'passwordRequiredField': "'password' is a required field.",
    'noResult': "No Result",
    'alreadyExists': "Already exists",

    // Success messages
    'loginSuccessful': "You've successfully logged in.",
    'emailSent': "Your password recovery email was sent.",
    'addedSuccess':"Added Successfully",
    'createdSuccess':"Created Successfully",
    'updatedSuccess':"Updated Successfully",
    'deletedSuccess':"Deleted Successfully",

    // Auth
    'requireLoginInput': "Please pass email and password.",
    'authUserNotFound': "Opps. Authentication failed. User not found.", 
    'authWrongPassword': "Authentication failed. Wrong password.",
    'authEmailExists':"Email already exists.",

    'haveProfile': "Already you have profile.",
    'noOwner': "Forbidden. You're not owner",

    'campaignExist': "Already you have opened Campaign",
    'noCampaign': "You haven't any Campaign yet.",
    'noCart': "You haven't cart yet.",
};

module.exports = msg;