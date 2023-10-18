const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  if (validateInputs()) {
    window.location.href = "home.html";
  }
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  let success = true;

  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else {
    setSuccess(password);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
