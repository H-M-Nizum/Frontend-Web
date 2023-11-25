// add click event handelar with the submit button.
document.getElementById("submit_btn").addEventListener("click", () => {
  // sotore input value for email
  const emailField = document.getElementById("email_id");
  const email = emailField.value;
  // sotore input value for password
  const passwordField = document.getElementById("password_id");
  const password = passwordField.value;
  // chack user valid or not
  if (email === "user@gmail.com" && password === "1234") {
    location.href = "bank.html";
  } else {
    alert("Invalid user id ❌");
  }
});
