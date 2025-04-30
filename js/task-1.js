const categories = document.querySelectorAll("#categories .item"); //Take class = item where id = # categories
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  //function for each categories as a category to find what we want.
  let header = category.querySelector("h2").textContent; //Take the h2 as a header
  let content = category.querySelectorAll("ul li"); //Take ul -> li as a content [array]
  console.log(`Category: ${header}`);
  for (let i = 0; i <= content.length - 1; i++) {
    console.log(`Category Content: ${content[i].innerHTML}`);
  }
  console.log(`Content: ${content.length}`);
});
