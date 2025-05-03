const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  const trimmedName = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});
