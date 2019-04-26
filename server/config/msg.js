const msg = {
    // Error messages
    'emailRequiredField': "'email' is a required field.",
    'emailIsEmail': "This is not a valid email address.",
    'passwordRequiredField': "'password' is a required field.",

    // Auth
    'requireLoginInput': "Please pass email and password.",
    'authUserNotFound': "Opps. Authentication failed. User not found.", 
    'authWrongPassword': "Authentication failed. Wrong password.",
    'authEmailExists':"Email already exists.",

    // Success messages
    'loginSuccessful': "You've successfully logged in.",
    'emailSent': "Your password recovery email was sent."
};

module.exports = msg;