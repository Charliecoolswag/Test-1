//------------------------------------------ Register Form -----------------------------------

document.addEventListener("DOMContentLoaded", function () {
    var registerButton = document.getElementById("register-button");
    var modal = document.getElementById("modal");
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("close");

    registerButton.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.getElementById("signup-form");
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var firstnameInput = document.getElementById("firstname");
    var lastnameInput = document.getElementById("lastname");
    var companyInput = document.getElementById("company");
    var vatInput = document.getElementById("vat");
    var countryInput = document.getElementById("country");
    var addressInput = document.getElementById("address");
    var cityInput = document.getElementById("city");
    var postcodeInput = document.getElementById("postcode");
    var phoneInput = document.getElementById("phone");
    var billingemailInput = document.getElementById("billingemail");

    var inputs = [
        usernameInput,
        emailInput,
        firstnameInput,
        lastnameInput,
        companyInput,
        vatInput,
        countryInput,
        addressInput,
        cityInput,
        postcodeInput,
        phoneInput,
        billingemailInput
    ];

    var feedbacks = {
        username: document.getElementById("username-feedback"),
        email: document.getElementById("email-feedback"),
        firstname: document.getElementById("firstname-feedback"),
        lastname: document.getElementById("lastname-feedback"),
        company: document.getElementById("company-feedback"),
        vat: document.getElementById("vat-feedback"),
        country: document.getElementById("country-feedback"),
        address: document.getElementById("address-feedback"),
        city: document.getElementById("city-feedback"),
        postcode: document.getElementById("postcode-feedback"),
        phone: document.getElementById("phone-feedback"),
        billingemail: document.getElementById("billingemail-feedback")
    };

    inputs.forEach(function (input) {
        input.addEventListener("input", function (event) {
            var id = input.id;
            var feedback = feedbacks[id];
            if (!input.validity.valid) {
                if (input.validity.valueMissing) {
                    feedback.textContent = "This field is required.";
                } else if (input.validity.typeMismatch) {
                    feedback.textContent =
                        "Please enter a valid email address.";
                } else if (input.validity.patternMismatch) {
                    feedback.textContent = input.title;
                } else {
                    feedback.textContent = "";
                }
            } else {
                feedback.textContent = "";
            }
        });
    });

    signupForm.addEventListener("submit", function (event) {
        inputs.forEach(function (input) {
            var id = input.id;
            var feedback = feedbacks[id];
            if (!input.validity.valid) {
                event.preventDefault(); // Prevent form submission if inputs are invalid
                if (input.validity.valueMissing) {
                    feedback.textContent = "This field is required.";
                } else if (input.validity.typeMismatch) {
                    feedback.textContent =
                        "Please enter a valid email address.";
                } else if (input.validity.patternMismatch) {
                    feedback.textContent = input.title;
                }
            }
        });
    });
});
