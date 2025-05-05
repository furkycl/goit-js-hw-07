document.addEventListener("DOMContentLoaded", () => {
  const controls = document.createElement("div");
  controls.id = "controls";
  controls.style.display = "flex";
  controls.style.justifyContent = "center";
  controls.style.gap = "10px";
  controls.style.marginTop = "40px";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = "100";
  input.step = "1";
  input.style.width = "150px";
  input.style.height = "40px";
  input.style.borderRadius = "8px";

  const createBtn = document.createElement("button");
  createBtn.type = "button";
  createBtn.dataset.create = "";
  createBtn.textContent = "Create";
  createBtn.style.backgroundColor = "#4E75FF";
  createBtn.style.border = "none";
  createBtn.style.width = "120px";
  createBtn.style.height = "40px";
  createBtn.style.borderRadius = "8px";
  createBtn.style.color = "#ffffff";

  const destroyBtn = document.createElement("button");
  destroyBtn.type = "button";
  destroyBtn.dataset.destroy = "";
  destroyBtn.textContent = "Destroy";
  destroyBtn.style.width = "120px";
  destroyBtn.style.height = "40px";
  destroyBtn.style.borderRadius = "8px";
  destroyBtn.style.backgroundColor = "#FF4E4E";
  destroyBtn.style.border = "none";
  destroyBtn.style.color = "#ffffff";

  controls.append(input, createBtn, destroyBtn);
  const boxes = document.createElement("div");
  boxes.id = "boxes";
  boxes.style.display = "flex";
  boxes.style.flexWrap = "wrap";
  boxes.style.gap = "10px";
  boxes.style.marginTop = "20px";
  boxes.style.justifyContent = "center";

  document.body.append(controls, boxes);
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      boxes.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }

  createBtn.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = "";
    } else {
      alert("Lütfen 1 ile 100 arasında bir sayı girin.");
    }
  });

  destroyBtn.addEventListener("click", destroyBoxes);
});
