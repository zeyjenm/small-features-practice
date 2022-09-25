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

postcodeInput.addEventListener('input', (e) => {
    e.preventDefault();
    if (postcodeInput.validity.rangeUnderflow) {
        postcodeInput.setCustomValidity("Please enter a valid four digit postcode.");
        postcodeInput.reportValidity();
    }
    else if (postcodeInput.validity.rangeOverflow) {
        postcodeInput.setCustomValidity("Please enter a valid four digit postcode.");
        postcodeInput.reportValidity();
    }
    else {
        postcodeInput.setCustomValidity('');

    }
});