const btnDecrEl = document.querySelector("[data-action= decrement]");
const btnIncrEl = document.querySelector("[data-action= increment]");
const valueEl = document.querySelector("#value");
let counterValue = 0;
btnDecrEl.addEventListener("click", onValueAway);
function onValueAway() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
btnIncrEl.addEventListener("click", onValueAdd);
function onValueAdd() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
