//Declaration
function ValidateForm(event) {
  const user = document.getElementById("username");
  const Nameerror = document.getElementById("Nameerror");
  const email = document.getElementById("Email");
  const Emailerror = document.getElementById("Emailerror");
  const mobile = document.getElementById("phone");
  const MbileError = document.getElementById("Mobileerror");
  const password = document.getElementById("password");
  const confirmd = document.getElementById("confirm");
  const Passworderror = document.getElementById("Passworderror");
  const confirm = document.getElementById("confirm");
  const signup = document.getElementById("signup");
  const checkedregrx_email = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const checkedregrx_password = (/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/);
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  
  if (user.value.trim() === "") {
    Nameerror.style.color = "white";
    Nameerror.textContent = "The name field is required.";
    user.style.borderColor = "white";
    event.preventDefault();
  } else if (!user.value.match(regName)) {
    Nameerror.style.color = "white";
    Nameerror.textContent = "invalid name";
    user.style.borderColor = "white";
    event.preventDefault();
  } else {
    Nameerror.textContent = "";
    user.style.borderColor = "";

  }
  
  if (email.value.trim() === "") {
    Emailerror.style.color = "white";
    Emailerror.textContent = "The email field is required.";
    email.style.borderColor = "white";
    event.preventDefault();
  } else if (!email.value.match(checkedregrx_email)) {
    Emailerror.style.color = "white";
    Emailerror.textContent = "You have entered an invalid email address!";
    email.style.borderColor = "white";
    event.preventDefault();
  } else {
    Emailerror.textContent = "";
    email.style.borderColor = "";

  }
  
  // Mobile Section
  if (mobile.value.trim() === "") {
    MbileError.style.color = "white";
    MbileError.textContent = "The mobile field is required.";
    mobile.style.borderColor = "white";
    event.preventDefault();
  } else if (!mobile.value.match(/^077\d{7}$/)) {
    MbileError.style.color = "white";
    MbileError.textContent = "You have entered an invalid mobile number!";
    mobile.style.borderColor = "white";
    event.preventDefault();
  } else {
    MbileError.textContent = "";
    mobile.style.borderColor = "";

  }
  
  if (password.value.trim() === "") {
    Passworderror.textContent = "The password field is required.";
    password.style.borderColor = "red";
    event.preventDefault();
  } else if (!password.value.match(checkedregrx_password)) {
    Passworderror.textContent = "The password must be between 6 and 18 characters.";
    password.style.borderColor = "red";
    Passworderror.style.color = "white"
    event.preventDefault();
  } else if (password.value !== confirm.value) {
    Passworderror.textContent = "The passwords do not match.";
    Passworderror.style.color = "white"
    password.style.borderColor = "red";
    confirm.style.borderColor = "red";
    event.preventDefault();

  } else {
    Passworderror.textContent = "";
    password.style.borderColor = "";
    confirm.style.borderColor = "";
  }


  // Retrieve saved form data from local storage
  const savedFormData = JSON.parse(localStorage.getItem("form_data")) || [];

  // Generate unique ID for new form submission
  let newId = savedFormData.length > 0 ? savedFormData[savedFormData.length - 1].id + 1 : 1;

  // Store input values in an object with the new ID
  const formData = {
    id: newId,
    name: user.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
  };

  // Add new form data to saved data array
  savedFormData.push(formData);

  // Store updated saved data in local storage
  localStorage.setItem("form_data", JSON.stringify(savedFormData));
}

document.getElementById("signup").addEventListener("click", ValidateForm);




function login() {
  // Retrieve email and password from session
  var email1 = sessionStorage.getItem("email");
  var password1 = sessionStorage.getItem("password");

  // Retrieve email and password entered by user
  const enteredEmail = document.getElementById("email-login").value;
  const enteredPassword = document.getElementById("password-login").value;

  // Compare entered email and password with the saved values
  if (enteredEmail === email1 && enteredPassword === password1) {
    // Successful login
    alert("Login successful!");
    // Set a session variable to indicate that the user is logged in
    sessionStorage.setItem("isLoggedIn", true);
    // Redirect to homepage or dashboard
    // window.location.href = "dashboard.html";
  } else {
    // Invalid credentials
    alert("Invalid email or password.");
  }
}

// Login button event listener
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  login();
});

