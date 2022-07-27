const form = document.querySelector('#form');
const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confirmPassword');
const register = document.querySelector('#register');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1.value === password2.value){
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    }else{
        passwordsMatch = false;
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        messageContainer.style.borderColor = 'red';
        message.textContent = "Passwords not match, try again!";
        message.style.color = 'red';
        password1.value = '';
        password2.value = '';
        return;
    }

    if(isValid&& passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do sth with user data
    console.log(user);
}

function processFormData(event){
    event.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if valid
    if(isValid&& passwordsMatch){
        storeFormData();
    }
}
// Event Listener
form.addEventListener('submit', processFormData);