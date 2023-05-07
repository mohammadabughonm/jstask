function validateForm(event) {
    const user = document.getElementById("username");
    const Nameerror = document.getElementById("Nameerror");
    const email = document.getElementById("Email");
    const Emailerror = document.getElementById("Emailerror");
    const mobile = document.getElementById("phone");
    const MbileError = document.getElementById("Mobileerror");
    const password = document.getElementById("password");
    const Passworderror = document.getElementById("Passworderror");
    const checkedregrx_email = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const checkedregrx_password = ('/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/');
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
      Passworderror.style.color = "white";
      Passworderror.textContent = "The password field is required.";
      password.style.borderColor = "white";
      event.preventDefault();
    } else if (!password.value.match(checkedregrx_password)) {
      Passworderror.style.color = "white";
      Passworderror.textContent = "The password must be between 6 and 18 characters.";
      password.style.borderColor = "white";
      event.preventDefault();
    } else {
      Passworderror.textContent = "";
      password.style.borderColor = "";
    }
  
    // Store input values in an object
    const formData = {
      name: user.value,
      email: email.value,
      mobile: mobile.value,
      password: password.value,
    };
  
    // Store object in local storage
    function generateID() {
        return Math.floor(Math.random() * 100000);
      }
      
      // Function to save form data in local storage
      function saveData() {
        const user = document.getElementById("username");
        const email = document.getElementById("email");
        const mobile = document.getElementById("phone");
        const password = document.getElementById("password");
      
        // Create an object with the form input values and a unique ID
        const formData = {
          id: generateID(),
          name: user.value,
          email: email.value,
          mobile: mobile.value,
          password: password.value
        };
      
        // Get the existing data from local storage or create an empty array
        const storedData = JSON.parse(localStorage.getItem("userData")) || [];
      
        // Add the new form data to the existing data array
        storedData.push(formData);
      
        // Save the updated data array to local storage
        localStorage.setItem("userData", JSON.stringify(storedData));
      }
      
      // Event listener for form submit
      const form = document.getElementById("myForm");
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        saveData();
        alert("Data saved to local storage!");
        form.reset();
      })
    }
    document.getElementById("signup").addEventListener("click", ValidateForm);