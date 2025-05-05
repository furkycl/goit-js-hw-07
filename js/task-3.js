const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  const trimmedName = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});
const header = document.querySelector("h1");
nameInput.style.width = "360px";
nameInput.style.height = "40px";
header.style.fontFamily = "Montserrat";
header.style.fontSize = "24px";
header.style.lineHeight = "32px";
