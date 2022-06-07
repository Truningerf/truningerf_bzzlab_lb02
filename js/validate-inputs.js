// read form elements
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const birthdate = document.getElementById('birthdate');
const subject = document.getElementById('subject');
// const message = document.getElementById('message');

// show error style and message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'control-form error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success style
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'control-form success';
}

// check email syntax
function checkEmail(input){
    // https://www.w3resource.com/javascript/form/email-validation.php
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid. Use the form samlpe@example.xx');
    }
}

// check phone syntax
function checkPhone(input){
    // https://stackoverflow.com/questions/23015979/regex-for-swiss-phone-number
    const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Phone number is not valid. Use the form +41 11 111 11 11 or 011 111 11 11');
    }
}

// check date syntax
function checkDate(input){
    // https://www.delftstack.com/de/howto/javascript/javascript-validate-date/#%25C3%25BCberpr%25C3%25BCfen-sie-das-datum-mithilfe-regul%25C3%25A4rer-ausdr%25C3%25BCcke-in-javascript
    const re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Date is not valid. Use the form dd/mm/yy.');
    }
}

// check required fields
function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required!`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    })
    return isRequired;
}

// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// first letter uppercase in error message
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// validate form input elements
function validateForm(){
    if (!checkRequired([firstname, lastname, email, phone, subject])){
        checkLength(firstname, 3,20);
        checkLength(lastname, 2, 30);
        checkEmail(email);
        checkPhone(phone);
        checkDate(birthdate);
        checkLength(subject, 1, 20);
    }
}

// event listener
form.addEventListener('submit', function (e){
    e.preventDefault();
    validateForm();
});
