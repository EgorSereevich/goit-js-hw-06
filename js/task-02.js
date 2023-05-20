const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("ul");
const itemEl = ingredients
  .map((item) => `<li class="item">${item}</li>`)
  .join("");
listEl.insertAdjacentHTML("beforeend", itemEl);
