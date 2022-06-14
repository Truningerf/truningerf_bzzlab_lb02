// validate form input elements
const validateLib = require('./ValidationLib');

function validateUser(userObj){
    // check required fields
    let result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result;}

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result;}

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result;}

    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) { return result;}

    result = validateLib.checkRequired("birthdate", userObj.birthdate);
    if (result.isNotValid) { return result;}

    result = validateLib.checkRequired("subject", userObj.subject);
    if (result.isNotValid) { return result;}

    // check length
    result = validateLib.checkLength("firstname", userObj.firstname, 3, 20);
    if (result.isNotValid) { return result;}

    result = validateLib.checkLength("lastname", userObj.lastname, 2, 30);
    if (result.isNotValid) { return result;}

    result = validateLib.checkLength("subject", userObj.subject, 1, 20);
    if (result.isNotValid) { return result;}

    // check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result;}

    // check phone syntax
    result = validateLib.checkPhone("phone", userObj.phone);
    if(result.isNotValid) {return result; }

    //check date
    result = validateLib.checkDate("birthdate", userObj.birthdate);
    if(result.isNotValid) {return result; }

    // all inputs are valid and isNotValid=false
    return false;
}

module.exports = {
    validateUser
}