function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanText = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
changeColorButton.style.backgroundColor = "#4e75ff";
changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.border = "none";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.color = "#ffffff";

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanText.textContent = randomColor;
});

const widget = document.querySelector(".widget");
widget.style.display = "flex";
widget.style.flexDirection = "column";
widget.style.alignItems = "center";
widget.style.justifyContent = "center";
