function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  if (nameInput.value.trim() === "") {
    alert("This field is required");
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Email field cannot be empty");
    return false;
  }

  if (!validateEmail(emailInput.value)) {
    alert("Invalid email address");
    return false;
  }

  if (messageInput.value.trim() === "") {
    alert("This field is required");
    return false;
  }

  return true;
}

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
