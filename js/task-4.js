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
loginButton.style.backgroundColor = "#4e75ff";
loginButton.style.width = "86px";
loginButton.style.height = "40px";
loginButton.style.borderRadius = "8px";
loginButton.style.border = "none";
loginButton.style.color = "#ffff";
loginButton.style.cursor = "pointer";

const styleInputsHover = document.createElement("styleInputsHover");
styleInputsHover.textContent = `
.style-inputs-hover:hover {
  border : 3px solid #000000;
}
`;
document.head.appendChild(style);
inputs.forEach((input) => {
  input.classList.add("style-inputs-hover:hover");
});
