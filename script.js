document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    
    const requiredFields = [
      { name: "firstName", errorId: "errorFirstName" },
      { name: "lastName", errorId: "errorLastName" },
      { name: "email", errorId: "errorEmail" },
      { name: "password", errorId: "errorPassword" },
      { name: "supportReason", errorId: "errorSupportReason" }
    ];

    
    requiredFields.forEach(({ name, errorId }) => {
      const input = form.querySelector(`[name="${name}"]`);
      const errorSpan = document.getElementById(errorId);

      if (!input.value.trim()) {
        errorSpan.style.display = "inline";
        valid = false;
      } else {
        errorSpan.style.display = "none";
      }
    });

    
    const sexOptions = form.querySelectorAll('[name="sex"]');
    const sexError = document.getElementById("errorSex");
    const selected = Array.from(sexOptions).some(option => option.checked);

    if (!selected) {
      sexError.style.display = "inline";
      valid = false;
    } else {
      sexError.style.display = "none";
    }

    
    if (valid) {
      localStorage.setItem("firstName", form.firstName.value);
      localStorage.setItem("lastName", form.lastName.value);
      localStorage.setItem("email", form.email.value);
      localStorage.setItem("sex", form.querySelector('[name="sex"]:checked').value);
      localStorage.setItem("supportReason", form.supportReason.value);
      window.location.href = "proj_profile_Roda.html";
    }
  });
});
