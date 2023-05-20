const categoriItemEl = document.querySelectorAll("h2");
console.log(`Number of categories: ${categoriItemEl.length}`);

const itemEl = document.querySelectorAll(".item");
itemEl.forEach(function (item) {
  const itemTitleEl = item.querySelector("h2");
  console.log(`Category: ${itemTitleEl.textContent}`);
  const listItemEl = item.querySelectorAll("ul > li");
  console.log(`Elements: ${listItemEl.length}`);
});
