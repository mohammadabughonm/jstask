








function checkInputs() {
    const content = 'you chart under 6'
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var submitButton = document.getElementById("submit-button");
    // Show submit button if either input field has a value
    
    if (password1.length > 6 && password2.length > 5) {
      submitButton.style.display = "block";
    } else {
      submitButton.style.display = "none";
    }
  }
  
  function checkPasswords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (password1 === password2 && password1.length >= 5) {
      document.getElementById("message").innerHTML = "You have access!";
      style.innerHTML = `
         .password1::after {
          content: '${content}';
                 }`   
                  } else {
      document.getElementById("message").innerHTML = "Passwords do not match ";
    }
  }
  

  