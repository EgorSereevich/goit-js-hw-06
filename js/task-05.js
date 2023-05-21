const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const textEl = document.querySelector("#name-output");
console.log(textEl);

inputEl.addEventListener("keydown", (event) => {
  textEl.textContent =
    event.target.value.length !== 0 ? `${event.target.value}` : "Anonymous";
});
