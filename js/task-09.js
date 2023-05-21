function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spnEl = document.querySelector(".color");
btnEl.addEventListener("click", getFunction);
function getFunction(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spnEl.textContent = getRandomHexColor();
}
