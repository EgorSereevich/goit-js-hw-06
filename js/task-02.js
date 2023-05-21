const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const listEl = document.querySelector("#ingredients");
// const itemEl = ingredients
//   .map((item) => `<li class="item">${item}</li>`)
//   .join("");
// listEl.insertAdjacentHTML("beforeend", itemEl);
const listEl = document.querySelector("#ingredients");

const itemEl = ingredients.map((item) => {
  const ingridientEl = document.createElement("li");
  ingridientEl.classList.add("item");
  ingridientEl.textContent = item;
  return ingridientEl;
});
listEl.append(...itemEl);
