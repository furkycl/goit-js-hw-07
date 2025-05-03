const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  }
  const objectUserInfo = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(objectUserInfo);
  form.reset();
});
