
// show error message
function showError(id, message){
    return `${id}: ${message}`;
}

// show success
function showSuccess(id){
    return `${id} successfully validated!`;
}

// check email syntax
function checkEmail(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // https://www.w3resource.com/javascript/form/email-validation.php
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, ' is not valid. Use the form samlpe@example.xx')
        }
    }
    return result;
}

// check phone syntax
function checkPhone(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // https://stackoverflow.com/questions/23015979/regex-for-swiss-phone-number
    const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, ' number is not valid. Use the form +41 11 111 11 11 or 011 111 11 11')
        }
    }
    return result;
}

// check date syntax
function checkDate(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // https://www.delftstack.com/de/howto/javascript/javascript-validate-date/#%25C3%25BCberpr%25C3%25BCfen-sie-das-datum-mithilfe-regul%25C3%25A4rer-ausdr%25C3%25BCcke-in-javascript
    const re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, ' is not valid. Use this format dd/mm/yy.')
        }
    }
    return result;
}

// check required fields
function checkRequired(id, input){
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // if input is empty...
    if (input.trim() === '') {
        // ... then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    return result;
}

// check input length
function checkLength(id, input, min, max) {
    // default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

module.exports = {
    checkRequired,
    checkLength,
    checkEmail,
    checkPhone,
    checkDate
}