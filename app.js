const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirmEmail");
const phoneNumber = document.getElementById("phoneNumber");
const birthDate = document.getElementById("birthDate");
const cardName = document.getElementById("cardName");
const lastName = document.getElementById("lastName");
const cardNumber = document.getElementById("cardNumber");
const cvvCode = document.getElementById("cvvCode");
const paymentAmount = document.getElementById("paymentAmount");
const textArea = document.getElementById("textArea");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("form");
const homeAddress = document.getElementById("homeAddress");
const zipCode = document.getElementById("zipCode");
const states = document.getElementById("states");
const city = document.getElementById("city");

username.addEventListener("input", (e) => {
  if (e.target.id === "username") {
    if (username.validity.tooShort) {
      username.setCustomValidity("Minimum character count is 5");
    } else if (username.validity.tooLong) {
      username.setCustomValidity("Maximum character count is 20");
    } else {
      username.setCustomValidity("");
    }
  }
});

password.addEventListener("input", (e) => {
  if (e.target.id === "password") {
    if (password.validity.tooShort) {
      password.setCustomValidity("Minimum character count is 8");
    } else if (password.validity.tooLong) {
      password.setCustomValidity("Maximum charcter count is 20");
    } else {
      password.setCustomValidity("");
    }
  }
});

confirmPassword.addEventListener("input", (e) => {
  if (e.target.id === "confirmPassword") {
    if (confirmPassword.validity.tooShort) {
      confirmPassword.setCustomValidity("Minimum character count is 8");
    } else if (confirmPassword.validity.tooLong) {
      confirmPassword.setCustomValidity("Maximum character count is 20");
    } else if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity("Your passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }
});

email.addEventListener("input", (e) => {
  if (e.target.id === "email") {
    if (email.validity.patternMismatch) {
      email.setCustomValidity("I need an email address please");
    } else {
      email.setCustomValidity("");
    }
  }
});

confirmEmail.addEventListener("input", (e) => {
  if (e.target.id === "confirmEmail") {
    if (confirmEmail.value !== email.value) {
      confirmEmail.setCustomValidity("Your emails do not match");
    } else {
      confirmEmail.setCustomValidity("");
    }
  }
});

phoneNumber.addEventListener("input", (e) => {
  if (e.target.id === "phoneNumber") {
    if (phoneNumber.validity.patternMismatch) {
      phoneNumber.setCustomValidity("Please use the format of (xxx)-xxx-xxxx");
    } else {
      phoneNumber.setCustomValidity("");
    }
  }
});

birthDate.addEventListener("input", (e) => {
  if (e.target.id === "birthDate") {
    if (birthDate.validity.tooShort) {
      birthDate.setCustomValidity(
        "Please choose a date no earlier than 09-09-1901"
      );
    } else if (birthDate.validity.tooLong) {
      birthDate.setCustomValidity(
        "Please choose a date no later than 12-31-2023"
      );
    } else {
      birthDate.setCustomValidity("");
    }
  }
});

cardName.addEventListener("input", (e) => {
  if (e.target.id === "cardName") {
    if (cardName.validity.patternMismatch) {
      cardName.setCustomValidity("Please enter the first name on your card");
    } else {
      cardName.setCustomValidity("");
    }
  }
});

lastName.addEventListener("input", (e) => {
  if (e.target.id === "lastName") {
    if (lastName.validity.patternMismatch) {
      lastName.setCustomValidity("Please enter the last name on your card");
    } else {
      lastName.setCustomValdity("");
    }
  }
});

cardNumber.addEventListener("input", (e) => {
  if (e.target.id === "cardNumber") {
    if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity("No letters please");
    } else {
      cardNumber.setCustomValidity("");
    }
  }
});

cvvCode.addEventListener("input", (e) => {
  if (e.target.id === "cvvCode") {
    if(cvvCode.patternMismatch){
      cvvCode.setCustomValdity("Please enter your cvv code. It should be 3-4 digits")
    } else{cvvCode.setCustomValidity("")}
  }});
 

textArea.addEventListener("input", (e) => {
  if (e.target.id === "textArea") {
    if (textArea.validity.tooLong) {
      textArea.setCustomValidity(
        "Please keep your message to no more than 500 characters"
      );
    } else {
      textArea.setCustomValidity("");
    }
  }
});

homeAddress.addEventListener("input", (e) => {
  if (e.target.id === "homeAddress") {
    if (homeAddress.validity.patternMismatch) {
      homeAddress.setCustomValidity(
        "Please enter the standard format for an address, ex:891 Blockwood Dr./Drive"
      );
    } else {
      homeAddress.setCustomValidity("");
    }
  }
});

zipCode.addEventListener("input", (e) => {
  if (e.target.id === "zipCode") {
    if (zipCode.validity.patternMismatch) {
      zipCode.setCustomValidity(
        "Please stick to a standard zipcode format ex:12345-12345 or just 12345"
      );
    } else {
      zipCode.setCustomValidity("");
    }
  }
});

city.addEventListener("input", (e) => {
  if (e.target.id === "city") {
    if (city.validity.patternMismatch) {
      city.setCustomValdity("Please enter your city name");
    } else {
      city.setCustomValidity("");
    }
  }
});

form.addEventListener("submit", (e) => {
  if (e.target.id === "form") {
    e.preventDefault();
  }
  if (
    username.checkValidity() &&
    password.checkValidity() &&
    confirmPassword.checkValidity() &&
    email.checkValidity() &&
    confirmEmail.checkValidity() &&
    phoneNumber.checkValidity() &&
    birthDate.checkValidity() &&
    cardNumber.checkValidity() && 
    cvvCode.checkValidity() &&
    homeAddress.checkValidity() &&
    zipCode.checkValidity() &&
    city.checkValidity()

  ) {
    window.location.href = "https://mjmealey.github.io/thank-you/";
  } else {
    confirmPassword.setCustomValidity("");
  }
});
