// read form elements
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const birthdate = document.getElementById('birthdate');
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

// check required fields
function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function (input){
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
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input,
            `${getFieldName(input)} must bed at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input,
            `${getFieldName(input)} must be less than ${max} characters`);
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
    // check required inputs
    if (!checkRequired([firstname, lastname, email, phone, birthdate])){
        // success... proceed with programm
        checkLength(firstname, 3,20);
    }
}

// event listener
form.addEventListener('submit', function (e){
    e.preventDefault();
    validateForm();
});
