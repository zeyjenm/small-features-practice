// document references for inputs

const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#text');
const postcodeInput = document.querySelector('#postcode');
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');

// validator for email

emailInput.addEventListener('input', () => {
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please enter a valid email");
        emailInput.reportValidity();
    } 
    else {
        emailInput.setCustomValidity("");
    }
});