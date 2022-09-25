// document references for inputs

const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postcodeInput = document.querySelector('#postcode');
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');

// validator for email

emailInput.addEventListener('input', () => {
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please enter a valid email.");
        emailInput.reportValidity();
    } 
    else {
        emailInput.setCustomValidity("");
    }
});

// validator for country

countryInput.addEventListener('input', () => {
    if (countryInput.validity.tooShort) {
        countryInput.setCustomValidity("Please enter a country.");
        countryInput.reportValidity();
    }
    else {
        countryInput.setCustomValidity("");
    }
});

postcodeInput.addEventListener('input', () => {
    if (postcodeInput.value.length <= 3) {
        postcodeInput.setCustomValidity("Please enter a valid four digit postcode.");
        postcodeInput.reportValidity();
    }
    else if (postcodeInput.value.length >= 5) {
        postcodeInput.setCustomValidity("Please enter a valid four digit postcode.");
        postcodeInput.reportValidity();
    }
    else {
        postcodeInput.setCustomValidity('');

    }
});

passwordInput.addEventListener('input', (e) => {
    e.preventDefault();
    if (passwordInput.value.length <= 5) {
        passwordInput.setCustomValidity("Please enter a password more than 6 characters long.");
        passwordInput.reportValidity();
    }
    else if (passwordInput.value.length >= 20) {
        passwordInput.setCustomValidity("Please enter a password less than 20 characters long.");
        passwordInput.reportValidity();
    }
    else if (/[a-z]/.test(passwordInput.value) == false) {
        passwordInput.setCustomValidity("Please enter a password containing at least one letter.");
        passwordInput.reportValidity();
    }
    else if (/\W/.test(passwordInput.value) == false) {
        passwordInput.setCustomValidity("Please enter a password containing at least one special character.");
        passwordInput.reportValidity();
    }
    else if (/\d/.test(passwordInput.value) == false) {
        passwordInput.setCustomValidity("Please enter a password containing at least one number.");
        passwordInput.reportValidity();
    }
    else if (passwordInput.value == "") {
        passwordInput.setCustomValidity("Please enter a password.");
        passwordInput.reportValidity();
    }
    else {
        passwordInput.setCustomValidity('');
    }
})

confirmInput.addEventListener('input', () => {
    if (confirmInput.value != passwordInput.value) {
        confirmInput.setCustomValidity("Passwords do not match.");
        confirmInput.reportValidity();
    }
    else {
        confirmInput.setCustomValidity('');
    }
})