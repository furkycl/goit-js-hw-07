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
const loginForm = document.querySelector(".login-form");
loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
const labels = loginForm.querySelectorAll("label");
labels.forEach((label) => {
  label.style.fontFamily = "Montserrat";
  label.style.fontWeight = "400";
  label.style.fontSize = "16px";
  label.style.lineHeight = "24px";
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.marginBottom = "8px";
});

const inputs = loginForm.querySelectorAll("input");
labels.forEach((input) => {
  input.style.width = "360px";
  input.style.height = "40px";
  input.style.marginBottom = "16px";
});

const loginButton = loginForm.querySelector("button");
const style = document.createElement("style");
style.textContent = `
.style-button-hover {
  background-color: #4e75ff;
  width: 86px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}
.style-button-hover:hover {

  background-color: #6c8cff;
}
`;
document.head.appendChild(style);
loginButton.classList.add("style-button-hover");
