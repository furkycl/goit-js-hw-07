const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  let header = category.querySelector("h2").textContent;
  let content = category.querySelectorAll("ul li");
  console.log(`Category: ${header}`);
  for (let i = 0; i <= content.length - 1; i++) {
    console.log(`Category Content ${[i + 1]}: ${content[i].innerHTML}`);
  }
  console.log(`Total Content: ${content.length}`);
});

const listHeaders = document.querySelectorAll("#categories .item h2");
listHeaders.forEach((h2) => {
  h2.style.fontFamily = "Montserrat";
  h2.style.fontWeight = "600";
  h2.style.fontSize = "24px";
  h2.style.lineHeight = "32px";
  h2.style.marginLeft = "16px";
});

const listItems = document.querySelectorAll("#categories li");
listItems.forEach((li) => {
  li.style.listStyle = "none";
  li.style.borderRadius = "5px";
  li.style.padding = "5px";
  li.style.marginBottom = "13px";
  li.style.backgroundColor = "#f6f6fe";
});
const contentItems = document.querySelectorAll("#categories .item ul li");
contentItems.forEach((li) => {
  li.style.border = "1px solid #000000";
  li.style.marginBottom = "8px";
  li.style.fontFamily = "Montserrat";
  li.style.fontWeight = "400";
  li.style.lineHeight = "24px";
});
