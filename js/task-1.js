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
