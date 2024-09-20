// Get the form element
const form = document.getElementById("functional-form");

// creating an event listener for the submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // this prevents the form from being submitted

  // Assigning the values of the form elements
  const confirm_password = document.getElementById("confirm_password").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;

  // form validation
  if (first_name.trim() == "") {
    alert("First name is required");
    return false;
  }
  if (last_name.trim() == "") {
    alert("Last name is required");
    return false;
  }
  if (email.trim() == "") {
    alert("Email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Enter a valid email");
    return false;
  }
  if (password.trim() == "") {
    alert("Password is required");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  } else if (!(confirm_password == password)) {
    alert("Passwords do not match");
    return false;
  }
  
  if (age.trim() == "") {
    alert("Age is required");
    return false;
  } else if (age < 13) {
    alert("You must be at least 13 years old");
    return false;
  }

  // If the form is valid, the form is submitted
  form.submit();
  alert("Form submitted successfully");
  

});

