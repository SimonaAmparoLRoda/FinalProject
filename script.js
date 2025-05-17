document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = ["firstName", "lastName", "email", "password", "supportReason"];
  let valid = true;

  fields.forEach((field) => {
    const input = document.querySelector(`[name="${field}"]`);
    const error = document.getElementById("error" + capitalize(field));
    if (!input.value.trim()) {
      error.textContent = "required";
      valid = false;
    } else {
      error.textContent = "";
    }
  });

  const sexOptions = document.getElementsByName("sex");
  const sexError = document.getElementById("errorSex");
  let sexValue = "";
  for (let option of sexOptions) {
    if (option.checked) {
      sexValue = option.value;
      break;
    }
  }
  if (!sexValue) {
    sexError.textContent = "required";
    valid = false;
  } else {
    sexError.textContent = "";
  }

  if (valid) {
    localStorage.setItem("firstName", document.querySelector('[name="firstName"]').value);
    localStorage.setItem("lastName", document.querySelector('[name="lastName"]').value);
    localStorage.setItem("email", document.querySelector('[name="email"]').value);
    localStorage.setItem("sex", sexValue);
    localStorage.setItem("supportReason", document.querySelector('[name="supportReason"]').value);
    window.location.href = "profile.html";
  }
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
