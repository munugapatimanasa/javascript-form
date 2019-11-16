//get the html elements
var emailElement=document.querySelector('#email');
var passwordElement =document.querySelector('#password');

//get the error elements
var emailErrorElement=document.querySelector('#email_error');
var passwordErrorElement=document.querySelector('#password_error');
var message='';

// Blur Event for Email field
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});
//blur event for password
passwordElement.addEventListener('blur',function () {
    clearErrorMessage(passwordElement,passwordErrorElement);

});



//validate function
function validate() {
    var isValid = true;

    if (emailElement.value.length === 0) {
        isValid = false;
        message = "required email";
        displayErrorMessage(emailElement, emailErrorElement, message);
        return isValid;
    }
    if (passwordElement.value.length === 0) {
        isValid = false;
        message = "required password";
        displayErrorMessage(passwordElement, passwordErrorElement, message);
        return isValid;

    }



    if (isValid){
        alert('login successfully');
    return true;
}
else {
        return false;
    }

}


// display Error Messages
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// clear the error messages
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0 white';
    errorElement.textContent = '';
}
